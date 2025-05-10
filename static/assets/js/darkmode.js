// Email signup form handler for Formspree
if (document.getElementById('email-signup-form')) {
  document.getElementById('email-signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const messageDiv = document.getElementById('email-signup-message');
    messageDiv.textContent = '';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (response.ok) {
        messageDiv.textContent = 'Thank you for subscribing! Check your inbox.';
        messageDiv.classList.remove('text-red-600');
        messageDiv.classList.add('text-green-600');
        form.reset();
      } else {
        messageDiv.textContent = 'There was a problem. Please try again.';
        messageDiv.classList.remove('text-green-600');
        messageDiv.classList.add('text-red-600');
      }
    } catch (err) {
      messageDiv.textContent = 'There was a problem. Please try again.';
      messageDiv.classList.remove('text-green-600');
      messageDiv.classList.add('text-red-600');
    }
  });
} 