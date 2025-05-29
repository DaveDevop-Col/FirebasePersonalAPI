export function mostrarAyuda(container) {
  container.innerHTML = `
    <div id="ayuda">
      <h2>Ayuda</h2>
      <form id="formulario-ayuda">
        <label for="nombre">Nombre:</label><br />
        <input type="text" id="nombre" name="nombre" required /><br /><br />
        
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />
        
        <label for="mensaje">Mensaje:</label><br />
        <textarea id="mensaje" name="mensaje" required></textarea><br /><br />
        
        <button type="submit">Enviar</button>
      </form>
      <div id="mensaje-ayuda"></div>
    </div>
  `;

  const form = document.getElementById('formulario-ayuda');
  const mensajeDiv = document.getElementById('mensaje-ayuda');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Simulación de envío - aquí solo mostramos alerta o mensaje
    mensajeDiv.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado.`;
    form.reset();
  });
}
