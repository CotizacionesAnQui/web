document.getElementById('registro-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aquí va la lógica para crear la cuenta con el correo y contraseña.
  // **IMPORTANTE:**  No envíes la contraseña en texto plano.
  // Usa una función hash (como bcrypt) para encriptar la contraseña antes de enviarla al backend.
  console.log('Correo:', email);
  console.log('Contraseña:', password); 
});

document.getElementById('google-login').addEventListener('click', function() {
  // Aquí va la lógica para iniciar sesión con Google.
  // Necesitarás configurar la API de Google Sign-In
  console.log('Iniciando sesión con Google...');
});

function cambiarIdioma(idioma) {
  // Función para cambiar el idioma del contenido
  if (idioma === 'es') {
    document.getElementById('email').placeholder = "Correo electrónico";
    document.getElementById('password').placeholder = "Contraseña";
    document.getElementById('boton-crear').textContent = "Crear cuenta";
    document.getElementById('google-login').textContent = "Registrarse con Google";
    document.getElementById('boton-iniciar-sesion').textContent = "Iniciar sesión";
  } else if (idioma === 'en') {
    document.getElementById('email').placeholder = "Email address";
    document.getElementById('password').placeholder = "Password";
    document.getElementById('boton-crear').textContent = "Create account";
    document.getElementById('google-login').textContent = "Register with Google";
    document.getElementById('boton-iniciar-sesion').textContent = "Log in";
  } else if (idioma === 'de') { // Alemán
    document.getElementById('email').placeholder = "E-Mail-Adresse";
    document.getElementById('password').placeholder = "Passwort";
    document.getElementById('boton-crear').textContent = "Konto erstellen";
    document.getElementById('google-login').textContent = "Mit Google registrieren";
    document.getElementById('boton-iniciar-sesion').textContent = "Anmelden";
  } else if (idioma === 'fr') { // Francés
    document.getElementById('email').placeholder = "Adresse e-mail";
    document.getElementById('password').placeholder = "Mot de passe";
    document.getElementById('boton-crear').textContent = "Créer un compte";
    document.getElementById('google-login').textContent = "S'inscrire avec Google";
    document.getElementById('boton-iniciar-sesion').textContent = "Se connecter";
  } else if (idioma === 'it') { // Italiano
    document.getElementById('email').placeholder = "Indirizzo email";
    document.getElementById('password').placeholder = "Password";
    document.getElementById('boton-crear').textContent = "Crea un account";
    document.getElementById('google-login').textContent = "Registrati con Google";
    document.getElementById('boton-iniciar-sesion').textContent = "Accedi";
  } else if (idioma === 'pt') { // Portugués
    document.getElementById('email').placeholder = "Endereço de email";
    document.getElementById('password').placeholder = "Senha";
    document.getElementById('boton-crear').textContent = "Criar conta";
    document.getElementById('google-login').textContent = "Registrar com o Google";
    document.getElementById('boton-iniciar-sesion').textContent = "Entrar";
  } else if (idioma === 'hi') { // Hindi
    document.getElementById('email').placeholder = "ईमेल पता";
    document.getElementById('password').placeholder = "पासवर्ड";
    document.getElementById('boton-crear').textContent = "खाता बनाएँ";
    document.getElementById('google-login').textContent = "गूगल से पंजीकरण करें";
    document.getElementById('boton-iniciar-sesion').textContent = "लॉग इन करें";
  }
}

document.getElementById('idioma').addEventListener('change', function() {
  const idiomaSeleccionado = this.value;
  cambiarIdioma(idiomaSeleccionado);

  // Guardar la preferencia del usuario (opcional) - usa localStorage con precaución
  localStorage.setItem('idioma', idiomaSeleccionado);
});

// Cargar la preferencia del usuario al cargar la página (opcional)
const idiomaGuardado = localStorage.getItem('idioma');
if (idiomaGuardado) {
  document.getElementById('idioma').value = idiomaGuardado;
  cambiarIdioma(idiomaGuardado);
}