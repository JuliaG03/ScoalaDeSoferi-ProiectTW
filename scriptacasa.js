// galeria 
const images = document.querySelectorAll('.image img');
images.forEach(image => {
  image.addEventListener('click', () => {
    
    if (document.querySelector('.overlay')) {
      return; 
    }

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.classList.add('enlarged-image');

    overlay.appendChild(enlargedImage);
    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden'; 

    overlay.addEventListener('click', () => {
      overlay.remove();
      document.body.style.overflow = 'auto'; 
    });
  });
});




// Funcția care afișează bun venit
function afiseazaMiniPagina() {
 
  const miniPagina = document.createElement('div');
  miniPagina.innerHTML = '<h2>Bine ați venit !</h2>';
  miniPagina.style.background = 'lightblue';
  miniPagina.style.padding = '20px';
  miniPagina.style.position = 'fixed';
  miniPagina.style.top = '50%';
  miniPagina.style.left = '50%';
  miniPagina.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(miniPagina);

 
  const suprapunere = document.createElement('div');
  suprapunere.style.position = 'fixed';
  suprapunere.style.top = '0';
  suprapunere.style.left = '0';
  suprapunere.style.width = '100%';
  suprapunere.style.height = '100%';
  suprapunere.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; 
  document.body.appendChild(suprapunere);

 
  document.addEventListener('click', function(event) {
  
    if (!miniPagina.contains(event.target)) {
      miniPagina.remove();
      suprapunere.remove();
    }
  });
}
setTimeout(afiseazaMiniPagina, 30000);



// Obține elementul footer
const footerElement = document.querySelector('footer');


const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();


const monthNames = [
  'ianuarie',
  'februarie',
  'martie',
  'aprilie',
  'mai',
  'iunie',
  'iulie',
  'august',
  'septembrie',
  'octombrie',
  'noiembrie',
  'decembrie'
];

const monthName = monthNames[month - 1];

const footerText = `©Grasu Julia, ${year} | Ziua curentă: ${day} ${monthName}`;
footerElement.textContent = footerText;

