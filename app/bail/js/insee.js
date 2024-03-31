const url = 'https://api.insee.fr/series/BDM/V1/data/SERIES_BDM/001515333';

const headers = new Headers({
  'Accept': 'application/xml',
  'Authorization': 'Bearer 5ae163d0-79e3-368f-bc53-3e9c36d35629'
});

const dataInsee = [];

fetch(url, { method: 'GET', headers: headers })
  .then(response => {
    if (!response.ok) {
      throw new Error('Réponse réseau incorrecte');
    }
    return response.text(); // Obtenir le texte brut de la réponse
  })
  .then(xmlString => {
    // Parsez le XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

    // Récupérez les éléments <Obs> sous <Series>
    const obsElements = xmlDoc.querySelectorAll('Series Obs');

    // Parcourez les éléments pour obtenir les valeurs TIME_PERIOD et OBS_VALUE

  
    obsElements.forEach(obsElement => {
      const timePeriod = obsElement.getAttribute('TIME_PERIOD');
      const obsValue = obsElement.getAttribute('OBS_VALUE');
      dataInsee.push([`${timePeriod}`, `${obsValue}`]);
    });

    dataInsee.reverse();
    console.log(dataInsee);
  })
  .catch(error => {
    console.error('Erreur :', error);
  });