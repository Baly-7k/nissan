document.addEventListener('DOMContentLoaded', () => {
  // Protege la navegación solo a nivel de demostración del navegador.
  if (sessionStorage.getItem('nissanAdminSesion') !== 'activa') {
    window.location.replace('login.html');
    return;
  }

  const botones = document.querySelectorAll('.nav-btn');
  const secciones = document.querySelectorAll('.seccion-dashboard');

  function mostrarSeccion(nombre) {
    secciones.forEach((seccion) => {
      seccion.classList.toggle('oculto', seccion.id !== `seccion-${nombre}`);
    });

    botones.forEach((boton) => {
      boton.classList.toggle('active', boton.dataset.seccion === nombre);
    });
  }

  botones.forEach((boton) => {
    boton.addEventListener('click', () => mostrarSeccion(boton.dataset.seccion));
  });

  document.getElementById('btn-cerrar-sesion').addEventListener('click', () => {
    sessionStorage.removeItem('nissanAdminSesion');
    window.location.replace('login.html');
  });

  // Marcar un lead como contactado lo oculta de pendientes y actualiza el contador.
  document.querySelectorAll('.btn-contactado').forEach((boton) => {
    boton.addEventListener('click', () => {
      const fila = boton.closest('tr');
      if (fila) fila.remove();

      const pendientes = document.querySelectorAll('#tabla-clientes tr').length;
      const contador = document.getElementById('contador-pendientes');
      contador.textContent = `${pendientes} Sin Contactar`;

      if (pendientes === 0) {
        document.getElementById('tabla-clientes').innerHTML =
          '<tr><td colspan="5" class="p-4 text-center text-gray-500">No hay leads pendientes.</td></tr>';
      }
    });
  });

  // El formulario simula el guardado; los archivos no se suben a un servidor.
  document.getElementById('form-modelo').addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre-modelo').value.trim();
    const mensaje = document.getElementById('modelo-mensaje');

    if (!nombre) return;

    mensaje.textContent = `El modelo "${nombre}" se validó en la demo. Para guardarlo de forma permanente necesitas conectar un backend.`;
    mensaje.classList.remove('hidden');
  });

  // Búsqueda simple por nombre, vehículo, estado o asesor en el historial.
  const campoBusqueda = document.getElementById('buscar-historial');
  const botonBuscar = document.getElementById('btn-buscar');
  const filasHistorial = Array.from(document.querySelectorAll('#tabla-historial tr'));
  const sinResultados = document.getElementById('sin-resultados');

  function buscarHistorial() {
    const consulta = campoBusqueda.value.trim().toLocaleLowerCase('es');
    let visibles = 0;

    filasHistorial.forEach((fila) => {
      const coincide = fila.textContent.toLocaleLowerCase('es').includes(consulta);
      fila.classList.toggle('hidden', !coincide);
      if (coincide) visibles++;
    });

    sinResultados.classList.toggle('hidden', visibles !== 0);
  }

  botonBuscar.addEventListener('click', buscarHistorial);
  campoBusqueda.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buscarHistorial();
    }
  });

  mostrarSeccion('garaje');
});
