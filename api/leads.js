export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const ENDPOINT_1 = process.env.LEAD_ENDPOINT;
  const ENDPOINT_2 = process.env.NEGOCIOS_ENDPOINT;

  // Standardizing fields for CRM compatibility
  const leadData = {
    ...req.body,
    nome: req.body.name || req.body.nome,
    telefone: req.body.whatsapp || req.body.phone || req.body.telefone,
    email: req.body.email,
    origem: req.body.source || 'Site Dornelas Corretor',
    tags: ['Site', req.body.intention || req.body.objective || 'Lead'].filter(Boolean)
  };

  try {
    const payloads = [
      fetch(ENDPOINT_1, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      }),
      fetch(ENDPOINT_2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      })
    ];

    const results = await Promise.all(payloads);
    const allOk = results.every(r => r.ok);

    if (allOk) {
      return res.status(200).json({ message: 'Lead sent to both integrations' });
    } else {
      return res.status(207).json({ message: 'Lead sent with partial success' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
