export const sendLeadToEndpoint = async (data) => {
  const PROXY_API = '/api/leads';
  
  try {
    const response = await fetch(PROXY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'Instagram DM',
        fullUrl: window.location.href
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending lead via proxy:', error);
    return false;
  }
};
