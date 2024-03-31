
let clause = {
  clause_resolutoire: `Il est prévu que le bail sera résilié immédiatement et de plein droit dans les cas suivants, si bon semble au bailleur :
  1) deux mois après un commandement demeuré infructueux à défaut de paiement du loyer ou des charges (qu’il s’agisse des provisions ou de la régularisation annuelle) aux termes convenus ou à défaut de versement du dépôt de garantie
  2) un mois après un commandement demeuré infructueux à défaut d’assurance des risques locatifs par le locataire
  3) troubles de voisinage constatés par une décision de justice passée en force de chose jugée.
  Une fois acquis au bailleur le bénéfice de la clause résolutoire, le locataire devra immédiatement quitter les lieux sans qu'aucune offre de paiement ou d'exécution de ses obligations ne puisse faire obstacle à la résiliation du contrat. Si le locataire refusait de quitter les locaux, il suffirait d'une simple ordonnance de référé pour constater la résiliation du bail et engager la procédure d'expulsion du locataire.
  Il est enfin précisé que le locataire est tenu des obligations du présent bail jusqu'à libération effective des lieux sans préjudice des dispositions de l'article 1760 du Code Civil, et ce nonobstant l'expulsion.`, 
  clause_solidarité: ``,
  clause_relouer: `Une fois le congé envoyé par l’une ou l’autre des parties, le locataire s’oblige à laisser visiter le bien en sa présence ou non, à raison de 5 créneaux par semaine, de 2 heures en jours ouvrables entre 8h et 20h. Pour chaque semaine, le locataire devra communiquer au bailleur, 2 jours à l’avance, les créneaux et les modalités de récupération des clefs en son absence le cas échéant.`,
  clause_loyer: `Le paiement du loyer et des charges se fera  par prélèvement ou virement. En cas de colocation via un bail unique avec clause de solidarité, le paiement de l'intégralité du loyer et des charges sera effectué par un des colocataires.`,
  clause_meuble: `Le bailleur ne sera pas tenu au remplacement et à la réparation des meubles et équipements qu'il aura éventuellement mis à la disposition du locataire. Le locataire devra obligatoirement avertir le bailleur de tout dysfonctionnement, ce dernier ayant alors le choix de prendre en charge ou non la réparation ou le remplacement. En cas de remplacement par le locataire, le nouvel équipement restera propriété de ce dernier lors de la libération des lieux.`,
  clause_animaux: `La détention d'animaux domestiques est autorisée par le bailleur, à condition qu'elle ne trouble pas la jouissance des voisins ni ne provoque de dégradations aux parties communes.

  De plus le bailleur interdit la détention dans les locaux loués de chiens de première catégorie telle que définie par l'article L211-12 et suivants du Code rural et de la pêche maritime.`,
  clause_assurance: `Le bailleur rappelle au locataire qu'il est tenu de s'assurer contre les risques locatifs (notamment dégât des eaux, incendie, explosion) auprès d'une compagnie d'assurance lui proposant un contrat multi-risque habitation.

  Il devra fournir une attestation correspondante au bailleur lors de l'état des lieux d'entrée, puis à chaque date d'anniversaire du bail. En l'absence de transmission, le bailleur peut résilier le bail ou souscrire un contrat pour le compte du Locataire et lui refacturer les primes correspondantes.
  
  Le bailleur rappelle enfin qu'en tant qu'occupant du logement le locataire est gardien de la chose louée; à ce titre il a la responsabilité de déclarer sans délai d'éventuels sinistres auprès de son assurance, d'en suivre la résolution et d'en informer le bailleur.`,
  clause_entretient: `Le locataire devra faire entretenir et nettoyer conformément à la législation en vigueur et au moins une fois l'an les appareils individuels de chauffage, de production d'eau chaude ou de froid (chaudière, chauffe-eau, pompe à chaleur, ballon d'eau chaude, climatisation etc.), à sa charge et à son initiative.

  Le locataire devra notamment faire procéder au moins une fois l'an à une visite de contrôle, par un professionnel agréé, des chaudières individuelles au fioul, gaz, bois, charbon ou tout autre combustible, dont la puissance est comprise entre 4 et 400 kilowatts. Le bailleur pourra s'il le souhaite demander au locataire de produire des justificatifs de ces visites de contrôle, sans que l'absence de demande du bailleur ne puisse engager sa responsabilité.`,
  clause_dégradation: `Le locataire sera tenu responsable de toutes dégradations, usure anormale, pertes ou pannes, concernant les équipements mobiliers ou immobiliers du logement pendant la durée de son occupation.

  Pour le calcul du préjudice et des dédommagements dus par le locataire au bailleur, les parties acceptent la grille de vétusté en pièce jointe et son principe de calcul. A défaut il sera retenu un coefficient de vétusté annuel de 7% pour tous les équipements.`,
  clause_regularisation: `Lors de la résiliation du bail, les parties conviennent que les régularisations des charges récupérables pour l'année civile en cours et l'année civile précédente ne seront pas réalisées après le départ du locataire.

  Les provisions déjà versées par le locataire pour ces années valent donc solde de tout compte concernant les charges récupérables. Le bailleur renonce ainsi à sa faculté de conserver 20% du dépôt de garantie pour une régularisation ultérieure.
  
  Cette clause ne s'applique que pour les charges récupérables, le bailleur se réservant notamment le droit de demander au locataire le paiement d'éventuelles réparations locatives ou dégradations constatées lors de l'état des lieux de sortie.
  
  Cette clause s'applique automatiquement sauf dans l'une des situations suivantes :
  
  1) si l'une des parties s'y oppose, elle doit alors notifier son opposition par courrier postal ou électronique pendant la période de préavis, ou à défaut de préavis au plus tard à la date de résiliation du bail;
  2) si le bailleur a connaissance du montant définitif de l'intégralité des charges récupérables pour une année civile donnée avant la date de résiliation du bail; le cas échéant il s'oblige à faire la régularisation des charges pour l'année considérée.`,
};



const pResiliation = document.getElementById("pClauseResilitation");
pResiliation.innerHTML = clause.clause_resolutoire

const pDroitVisite = document.getElementById("pDroitVisite");
pDroitVisite.innerHTML = clause.clause_relouer

const pModalitePaiement = document.getElementById("pModalitePaiement");
pModalitePaiement.innerHTML = clause.clause_loyer

const pDispositionMeubles = document.getElementById("pDispositionMeubles");
pDispositionMeubles.innerHTML = clause.clause_meuble

const pRenonciationRegularisation = document.getElementById("pRenonciationRegularisation");
pRenonciationRegularisation.innerHTML = clause.clause_regularisation

const pEntretienAppareils = document.getElementById("pEntretienAppareils");
pEntretienAppareils.innerHTML = clause.clause_entretient

const pDegradationLocataire = document.getElementById("pDegradationLocataire");
pDegradationLocataire.innerHTML = clause.clause_dégradation

const pDetentionAnimaux = document.getElementById("pDetentionAnimaux");
pDetentionAnimaux.innerHTML = clause.clause_animaux

const pAssuranceHabitation = document.getElementById("pAssuranceHabitation");
pAssuranceHabitation.innerHTML = clause.clause_assurance

const pSolodarite = document.getElementById("pSolodarite");
pSolodarite.innerHTML = clause.clause_solidarité






// Sélectionnez le tableau avec l'ID "clause"
const tableauClause = document.getElementById("clause");

// Sélectionnez toutes les lignes (tr) du tableau "clause" par leur balise
const lignesClause = tableauClause.querySelectorAll("tbody td");

// Ajoutez un gestionnaire d'événement "click" à chaque ligne du tableau "clause"
lignesClause.forEach((ligne) => {
ligne.addEventListener("click", function () {
  // Récupérez le contenu de la ligne (en supprimant les balises td)
  const contenuLigne = ligne.textContent.trim();
  const myclauseElement = document.getElementById("myclause");

// Ajoutez du texte à la balise
myclauseElement.textContent = contenuLigne;
let   myText = document.getElementById("myTextareaClause");

myTextareaClause.value = "";

console.log(contenuLigne)

  switch(contenuLigne) {

    case "Clause résolutoire":
      myText.value = clause.clause_resolutoire;
      pResiliation.innerHTML = clause.clause_resolutoire
      //clause.clause_resolutoire = myTextareaClause.value;
    break;

    case "Clause de solidarité":
      myText.value = clause.clause_solidarité;
      pSolodarite.innerHTML = clause.clause_solidarité
    break;

    case "Visites pour relouer":
      myText.value = clause.clause_relouer;
      pDroitVisite.innerHTML = clause.clause_relouer
    break;

    case "Mode de paiement du loyer":
      myText.value = clause.clause_loyer;
      pModalitePaiement.innerHTML = clause.clause_loyer
    break;

    case "Mise à disposition des meubles":
      myText.value = clause.clause_meuble;
      pDispositionMeubles.innerHTML = clause.clause_meuble
    break;

    case "Animaux domestiques":
      myText.value = clause.clause_animaux;
      pDetentionAnimaux.innerHTML = clause.clause_animaux
    break;

    case "Assurance habitation du locataire":
      myText.value = clause.clause_assurance;
      pAssuranceHabitation.innerHTML = clause.clause_assurance
    break;

    case "Entretien annuels des appareils":
      myText.value = clause.clause_entretient;
      pEntretienAppareils.innerHTML = clause.clause_entretient
    break;

    case "Dégradations du locataire":
      myText.value = clause.clause_dégradation;
      pDegradationLocataire.innerHTML = clause.clause_dégradation
    break;

    case "Renonciation à la régularisation":
      myText.value = clause.clause_regularisation;
      pRenonciationRegularisation.innerHTML = clause.clause_regularisation
    break;
  }

});
});

var myclauseInput = document.getElementById("myTextareaClause");

// Créez un gestionnaire d'événement pour l'événement "input"
myclauseInput.addEventListener("input", function() {


var myclauseH1 = document.getElementById("myclause");

  // Récupérez le texte contenu dans la balise h1
  var texteDansH1 = myclauseH1.innerText;
  // Récupérez la valeur entrée par l'utilisateur
  var myclauseValue = myclauseInput.value;

  // Affichez la valeur dans la console ou effectuez d'autres actions en fonction de vos besoins
  //console.log("Valeur de l'input 'myTextareaClause' : " + myclauseValue);

  switch(texteDansH1) {

    case "Clause résolutoire":
      
      clause.clause_resolutoire = myclauseValue;
      console.log(clause.clause_resolutoire);
      pResiliation.innerHTML = clause.clause_resolutoire
      //clause.clause_resolutoire = myTextareaClause.value;
    break;

    case "Clause de solidarité":
      clause.clause_solidarité = myclauseValue;
      pSolodarite.innerHTML = clause.clause_solidarité

    break;

    case "Visites pour relouer":
      clause.clause_relouer = myclauseValue;
        pDroitVisite.innerHTML = clause.clause_relouer
    break;

    case "Mode de paiement du loyer":
      clause.clause_loyer = myclauseValue;
        pModalitePaiement.innerHTML = clause.clause_loyer
    break;

    case "Mise à disposition des meubles":
      clause.clause_meuble = myclauseValue;
        pDispositionMeubles.innerHTML = clause.clause_meuble
    break;

    case "Animaux domestiques":
      clause.clause_animaux = myclauseValue;
      pDetentionAnimaux.innerHTML = clause.clause_animaux
    break;

    case "Assurance habitation du locataire":
      clause.clause_assurance = myclauseValue;
      pAssuranceHabitation.innerHTML = clause.clause_assurance
    break;

    case "Entretien annuels des appareils":
      clause.clause_entretient = myclauseValue;
      pEntretienAppareils.innerHTML = clause.clause_entretient
    break;

    case "Dégradations du locataire":
      clause.clause_dégradation = myclauseValue;
      pDegradationLocataire.innerHTML = clause.clause_dégradation
    break;

    case "Renonciation à la régularisation":
      clause.clause_regularisation = myclauseValue;
      pRenonciationRegularisation.innerHTML = clause.clause_regularisation
    break;
  }


});

// Sélectionnez la div cliquable par son ID
const divCliquable = document.getElementById("divCliquable");

// Sélectionnez le tableau par son ID
const monTableau = document.getElementById("annexeClause");

if(divCliquable) {

// Ajoutez un gestionnaire d'événement "click" à la div
divCliquable.addEventListener("click", function() {
// Vérifiez si le tableau est actuellement visible
if (monTableau.style.display === "block") {
  // Si le tableau est visible, masquez-le
  monTableau.style.display = "none";
} else {
  // Sinon, affichez-le
  monTableau.style.display = "block";
}
});
}

// Sélectionnez le tableau avec l'ID "annexeClause"
const tableauAnnexeClause = document.getElementById("annexeClause");

if(tableauAnnexeClause) {

// Sélectionnez toutes les cellules <td> du tableau "annexeClause"
const cellulesAnnexeClause = tableauAnnexeClause.querySelectorAll("tbody td");

// Sélectionnez la balise <h1> avec l'ID "myclause"
const myclauseH1 = document.getElementById("myclause");

// Ajoutez un gestionnaire d'événement "click" à chaque cellule du tableau "annexeClause"
cellulesAnnexeClause.forEach((cellule) => {
cellule.addEventListener("click", function () {
  // Récupérez le texte contenu dans la cellule
  const texteCellule = cellule.textContent.trim();

  // Ajoutez le texte à la balise <h1> avec l'ID "myclause"
  myclauseH1.textContent = texteCellule;

  const myclauseElement = document.getElementById("myclause");

  // Ajoutez du texte à la balise

  let   myText = document.getElementById("myTextareaClause");

      if(myclauseH1.textContent == "Honoraires d'agence") {
      
        console.log('here');
      }


  
});
});
}


// Sélectionnez toutes les cellules du tableau
const cells = document.querySelectorAll('td');

// Ajoutez un gestionnaire d'événement "click" à chaque cellule
cells.forEach((cell) => {
cell.addEventListener('click', function() {
  // Supprimez la classe "highlighted" de toutes les cellules
  cells.forEach((c) => {
    c.classList.remove('highlighted');
  });
  // Ajoutez la classe "highlighted" à la cellule cliquée
  cell.classList.add('highlighted');
});
});