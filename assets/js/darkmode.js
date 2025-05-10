var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

// Email signup form handler for Formspree
if (document.getElementById('email-signup-form')) {
  document.getElementById('email-signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
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