
for (let i = 0; i < 5; i++) { //change the value of i to the amount of messages you want (max. 5)
async function sendWebhookMessage(webhookURL, message) {
    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: message
        })
      });
  
      if (!response.ok) {
        throw new Error('Webhook request failed with status ' + response.status);
      }
  
      console.log('Webhook message sent successfully');
    } catch (error) {
      console.error('Failed to send webhook message:', error);
    }
  }
  sendWebhookMessage('YOUR_WEBHOOK', 'YOUR_MESSAGE'); //Enter Your Webhook + Message
  console.log(i);
}
console.log(x);
