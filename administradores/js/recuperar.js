document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-recuperar');
  const mensaje = document.getElementById('recuperar-mensaje');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Demostración visual: no se envía ningún correo real sin un backend.
    mensaje.textContent = 'Si el correo está registrado, recibirás instrucciones para recuperar el acceso.';
    mensaje.classList.remove('hidden');
  });
});
