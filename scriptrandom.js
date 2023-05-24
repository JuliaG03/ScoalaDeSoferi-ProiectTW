
const titleElement = document.querySelector('.title');

// Obține stilurile de calcul ale elementului
const styles = window.getComputedStyle(titleElement);

// Obține lungimea textului din element
const textLength = titleElement.textContent.length;

// Generează un index aleatoriu din lungimea textului
const randomIndex = Math.floor(Math.random() * textLength);

// Obține caracterul la indexul generat 
const randomCharacter = titleElement.textContent[randomIndex];

// Verifică dacă caracterul este o literă
if (/[a-zA-Z]/.test(randomCharacter)) {
  // Generează un caracter aleatoriu diferit de caracterul actual
  let randomNewCharacter;
  do {
    randomNewCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } while (randomNewCharacter === randomCharacter);

  // Schimbă caracterul în text cu noul caracter 
  const newText = titleElement.textContent.replace(randomCharacter, randomNewCharacter);
  titleElement.textContent = newText;
}
