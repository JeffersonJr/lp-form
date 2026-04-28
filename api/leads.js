export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const LEAD_ENDPOINT = process.env.LEAD_ENDPOINT;
  const NEGOCIOS_ENDPOINT = process.env.NEGOCIOS_ENDPOINT;

  if (!LEAD_ENDPOINT || !NEGOCIOS_ENDPOINT) {
    return res.status(500).json({ message: 'Missing endpoints' });
  }

  // Capturing technical metadata
  const technicalInfo = `IP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress} | Local: ${req.headers['x-vercel-ip-city'] || 'Unknown'}, ${req.headers['x-vercel-ip-country'] || 'Unknown'} | Disp: ${req.headers['user-agent'] || 'Unknown'}`;

  // Formatting message body
  const mensagemBody = `
    Intenção: ${req.body.intention || req.body.objective || 'N/A'}
    Renda: ${req.body.incomeValue || req.body.budget || 'N/A'}
    Investimento: ${req.body.investmentAmount || 'N/A'}
    Timeline: ${req.body.timeline || 'N/A'}
    Origem: Instagram DM
    URL: ${req.body.fullUrl || 'N/A'}
    ---
    ${technicalInfo}
  `.replace(/\s+/g, ' ').trim();

  // Creating payload
  const payload = {
    nome: req.body.name || req.body.nome || 'Lead Site',
    email: req.body.email || 'lead@site.com.br',
    telefone: req.body.whatsapp || req.body.phone || req.body.telefone || '',
    mensagem: mensagemBody,
    origem: 'imobflux', // Using imobflux as origin to help with internal mapping
    token_negocios: process.env.BUSINESS_TOKEN,
    api_key: process.env.BUSINESS_TOKEN,
    // Including additional fields directly in case the system maps them
    intention: req.body.intention || req.body.objective || '',
    budget: req.body.budget || '',
    income: req.body.incomeValue || '',
    investment: req.body.investmentAmount || '',
    timeline: req.body.timeline || ''
  };

  try {
    // Send to both endpoints simultaneously as JSON
    const [leadResponse, negociosResponse] = await Promise.all([
      fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
      fetch(NEGOCIOS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    ]);

    if (leadResponse.ok || negociosResponse.ok) {
      return res.status(200).json({ 
        message: 'Success', 
        leadStatus: leadResponse.status, 
        negociosStatus: negociosResponse.status 
      });
    } else {
      const errorText = await leadResponse.text();
      return res.status(leadResponse.status).json({ message: 'Error', details: errorText });
    }
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}
