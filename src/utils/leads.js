export const sendLeadToEndpoint = async (data) => {
  const ENDPOINT = 'https://webhook.site/7e003c83-8a32-4e99-9834-bc010e826859';
  
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: window.location.pathname
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending lead:', error);
    return false;
  }
};
