export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const ENDPOINT = process.env.LEAD_ENDPOINT;

  if (!ENDPOINT) {
    return res.status(500).json({ message: 'Missing lead endpoint' });
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

  // Creating form-encoded data
  const params = new URLSearchParams();
  params.append('nome', req.body.name || req.body.nome || 'Lead Site');
  params.append('email', req.body.email || 'lead@site.com.br');
  params.append('telefone', req.body.whatsapp || req.body.phone || req.body.telefone || '');
  params.append('mensagem', mensagemBody);
  params.append('origem', 'Instagram DM');
  // Adding the business identifier as a token/key
  params.append('token_negocios', process.env.BUSINESS_TOKEN);
  params.append('api_key', process.env.BUSINESS_TOKEN);

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Success' });
    } else {
      const errorText = await response.text();
      return res.status(response.status).json({ message: 'Error', details: errorText });
    }
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}
