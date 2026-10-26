function switchTab(tabId) {
  // Ocultar todas las secciones
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active-tab'));

  // Quitar la clase active de todos los botones
  const buttons = document.querySelectorAll('.nav-item');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Mostrar la sección seleccionada
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active-tab');
  }

  // Activar el botón correspondiente
  event.currentTarget.classList.add('active');
}
