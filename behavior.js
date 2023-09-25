document.addEventListener("DOMContentLoaded", function(event) {
// Función para generar una contraseña segura
function generatePassword() {
    const length = document.getElementById("password-length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSpecialCharacters = document.getElementById("special-characters").checked;
  
    // Definir los conjuntos de caracteres posibles
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_+=<>?";
  
    let validChars = "";
  
    if (useUppercase) validChars += uppercaseChars;
    if (useLowercase) validChars += lowercaseChars;
    if (useNumbers) validChars += numberChars;
    if (useSpecialCharacters) validChars += specialChars;
  
    if (validChars === "") {
      alert("Selecciona al menos un tipo de caracter.");
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
  
    document.getElementById("password-display").textContent = `Contraseña Generada: ${password}`;
  }
  
  // Manejar el evento del botón de generación
  document.getElementById("generate-button").addEventListener("click", generatePassword);
  
});