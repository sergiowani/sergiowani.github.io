document.getElementById('formularioContacto').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  //Dirección de correo electrónico
  const destinatario = 'sergiowani@outlook.es';
  
  //Enlace 'mailto' con los valores recopilados
  const mailtoLink = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent('Nombre: ' + nombre + '\n\nMensaje:\n' + mensaje);

  //Abrir el enlace 'mailto'
  window.location.href = mailtoLink;
});

limpiarForm = () => {
  document.getElementById('formularioContacto').reset();
}