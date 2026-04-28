export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const ENDPOINT_1 = process.env.LEAD_ENDPOINT;
  const ENDPOINT_2 = process.env.NEGOCIOS_ENDPOINT;

  if (!ENDPOINT_1) {
    return res.status(500).json({ message: 'Missing lead endpoint' });
  }

  // Capturing technical metadata from Vercel headers
  const technicalInfo = {
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    city: req.headers['x-vercel-ip-city'] || 'Unknown',
    country: req.headers['x-vercel-ip-country'] || 'Unknown',
    device: req.headers['user-agent'] || 'Unknown',
    platform: req.headers['sec-ch-ua-platform'] || 'Unknown'
  };

  // Formatting data to match Imob.online / Imobflux typical requirements
  const formattedData = {
    nome: req.body.name || req.body.nome || '',
    email: req.body.email || '',
    telefone: req.body.whatsapp || req.body.phone || req.body.telefone || '',
    celular: req.body.whatsapp || req.body.phone || '',
    mensagem: `Intenção: ${req.body.intention || req.body.objective || 'N/A'}. 
               Renda: ${req.body.incomeValue || req.body.budget || 'N/A'}. 
               Investimento: ${req.body.investmentAmount || 'N/A'}. 
               Timeline: ${req.body.timeline || 'N/A'}
               ---
               Metadados Técnicos:
               IP: ${technicalInfo.ip}
               Local: ${technicalInfo.city}, ${technicalInfo.country}
               Dispositivo: ${technicalInfo.device}
               Plataforma: ${technicalInfo.platform}
               Referência URL: ${req.body.fullUrl || 'N/A'}`,
    origem: req.body.source || 'Instagram DM',
    key: '7e003c83-8a32-4e99-9834-bc010e826859'
  };

  try {
    const payloads = [
      fetch(ENDPOINT_1, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formattedData),
      })
    ];

    if (ENDPOINT_2) {
      payloads.push(
        fetch(ENDPOINT_2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formattedData),
        })
      );
    }

    const results = await Promise.all(payloads);
    const allOk = results.every(r => r.ok);

    if (allOk) {
      return res.status(200).json({ message: 'Success' });
    } else {
      const errorText = await results[0].text();
      return res.status(207).json({ message: 'Partial success or error', details: errorText });
    }
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}
