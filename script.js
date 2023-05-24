function afiseazaImagineMasina() {
  const masina = document.createElement('img');
  masina.src = 'masinuta.png';
  masina.style.position = 'fixed';
  masina.style.bottom = '0';
  masina.style.left = '-100px'; // Poziția inițială a mașinii în afara ecranului
  masina.style.transition = 'left 1s linear'; // Animare deplasare lină
  masina.style.width = '100px'; // Lățimea dorită a mașinii
  masina.style.height = 'auto'; 

  document.body.appendChild(masina);

  function deplaseazaMasina() {
    const windowWidth = window.innerWidth;
    const masinaWidth = masina.offsetWidth;
    const targetLeft = windowWidth - masinaWidth;

    masina.style.left = targetLeft + 'px';

    setTimeout(function() {
      masina.style.left = '-100px'; // Poziție inițială a mașinii în afara ecranului
    }, 1000); // Așteaptă 1 secundă după deplasarea la marginea dreaptă și apoi resetează poziția
  }

  setInterval(deplaseazaMasina, 30000);
}

setTimeout(afiseazaImagineMasina, 60000);