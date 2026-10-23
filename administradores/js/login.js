document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const error = document.getElementById('login-error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('pass-login').value;

    // Credenciales de demostración: no usar este método en producción.
    if (email === 'admin@nissan.com' && password === '123456') {
      sessionStorage.setItem('nissanAdminSesion', 'activa');
      window.location.href = 'dashboard.html';
    } else {
      error.classList.remove('hidden');
    }
  });
});
