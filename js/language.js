// Función para cambiar el idioma de los textos
function toggleLanguage() {
  // Obtener el idioma actual
  const currentLanguage = document.documentElement.lang;

  // Cambiar el idioma y cargar los textos correspondientes
  if (currentLanguage === 'es') {
      document.documentElement.lang = 'en'; // Cambiar a inglés
      updateTexts(textsEN); // Cargar textos en inglés
      updatePlaceholders(textsEN); // Actualizar placeholders en inglés
  } else {
      document.documentElement.lang = 'es'; // Cambiar a español
      updateTexts(textsES); // Cargar textos en español
      updatePlaceholders(textsES); // Actualizar placeholders en español
  }
}

// Función para actualizar los textos en la página
function updateTexts(texts) {
  // Actualizar el contenido de los elementos con los textos correspondientes
  /* home */
  document.getElementById("link-home").innerText = texts.home.home;
  document.getElementById("link-about").innerText = texts.home.about;
  document.getElementById("link-projects").innerText = texts.home.projects;
  document.getElementById("link-badges").innerText = texts.home.badges;
  document.getElementById("link-contact").innerText = texts.home.contact;
  document.getElementById("link-git").innerText = texts.home.git;
  /* about */
  document.getElementById("intro").innerText = texts.about.intro;
  /* contact */
  document.getElementById("contactMe").innerText = texts.contact.contactMe;
  document.getElementById("name").innerText = texts.contact.name;
  document.getElementById("subject").innerText = texts.contact.subject;
  document.getElementById("message").innerText = texts.contact.message;
  document.getElementById("send").innerText = texts.contact.send;
  document.getElementById("clear").innerText = texts.contact.clear;
  /* lang */
  document.getElementById("toggleLanguageButton").innerText = texts.lang.lang;
}

// Actualizar el contenido de los elementos con los placeholder correspondientes
function updatePlaceholders(texts) {
  document.getElementById("nombre").placeholder = texts.contact.name;
  document.getElementById("asunto").placeholder = texts.contact.subject;
  document.getElementById("mensaje").placeholder = texts.contact.message;
}


// Agregar un evento al botón para cambiar de idioma
document.getElementById("toggleLanguageButton").addEventListener("click", toggleLanguage);

// Cargar los textos en español al cargar la página
updateTexts(textsES);
