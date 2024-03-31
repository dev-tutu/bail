// jshint esversion: 6

var totalLoyer = 0


var loyerMensuelInput = document.getElementById("loyerMensuel");
// Créez un gestionnaire d'événement pour l'événement "input"
loyerMensuelInput.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var loyerMensuel = loyerMensuelInput.value;

  // Affichez la valeur dans la console
  console.log("Loyer mensuel hors charges de l'utilisateur : " + loyerMensuel);
  show("span_montant_loyer", loyerMensuel)
  show("span_montant_loyerArray", loyerMensuel + "€")
  totalLoyer += loyerMensuel;
});


const selectElementPaiementLoyer = document.getElementById("PaiementLoyer");

// Ajout d'un gestionnaire d'événements, par exemple "change" pour réagir aux modifications de la sélection
selectElementPaiementLoyer.addEventListener("change", function () {
  // Récupérer la valeur sélectionnée dans le select
  const selectedValue = selectElementPaiementLoyer.value;

  // Faire quelque chose en fonction de la valeur sélectionnée
  console.log("Option sélectionnée : " + selectedValue);
  show('span_date_paiement', 'au plus tard avant le ' + selectedValue + " du mois")
});

// Sélection de l'élément textarea par son ID
const textareaElementR = document.getElementById("textarearaisonJustifiant");

// Ajout d'un gestionnaire d'événements, par exemple "input" pour réagir aux modifications du texte
textareaElementR.addEventListener("input", function () {
  // Récupérer le contenu du textarea
  const textContent = textareaElementR.value;

  // Faire quelque chose en fonction du contenu du textarea
  console.log("Contenu du textarea : " + textContent);
  show('span_duree_reduite', textContent)
});


// Sélectionnez le <select> élément
const selectElement = document.getElementById('PaiementLoyer');

// Obtenez le mois en cours (0 = janvier, 1 = février, ..., 11 = décembre)
const moisEnCours = new Date().getMonth();

// Obtenez le nombre de jours dans le mois en cours
const nombreDeJours = new Date(new Date().getFullYear(), moisEnCours + 1, 0).getDate();

// Boucle pour ajouter chaque jour au menu déroulant
for (let jour = 1; jour <= nombreDeJours; jour++) {
  const option = document.createElement('option');
  option.value = jour;
  option.text = 'le ' + jour + " mois";
  selectElement.appendChild(option);
}

var dateEntreeInput = document.getElementById("dateEntree");

// Créez un gestionnaire d'événement pour l'événement "change"
dateEntreeInput.addEventListener("change", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var dateEntree = dateEntreeInput.value;

  // Affichez la valeur dans la console
  console.log("Date d'entrée de l'utilisateur : " + dateEntree);

  show('span_effet_contrat', dateEntree)
});


// Sélectionnez l'élément input par son ID
var depotGarantieInput = document.getElementById("depotGarantie");

// Créez un gestionnaire d'événement pour l'événement "input"
depotGarantieInput.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var depotGarantie = depotGarantieInput.value;

  // Affichez la valeur dans la console
  console.log("Dépôt de garantie de l'utilisateur : " + depotGarantie);
  show('span_garantie', depotGarantie)
});

// Sélectionnez l'élément input pour le loyer mensuel de référence par son ID
var loyerMensuelRefInput = document.getElementById("loyerMensuelRef");

// Créez un gestionnaire d'événement pour l'événement "input"
loyerMensuelRefInput.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var loyerMensuelRef = loyerMensuelRefInput.value;

  // Affichez la valeur dans la console
  console.log("Loyer mensuel de référence de l'utilisateur : " + loyerMensuelRef);
  alert('here');
  show('span_loyer_ref', loyerMensuelRef)
});

// Sélectionnez l'élément input pour le loyer mensuel de référence majoré par son ID
var loyerMensuelRefMajInput = document.getElementById("loyerMensuelRefMaj");

// Créez un gestionnaire d'événement pour l'événement "input"
loyerMensuelRefMajInput.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var loyerMensuelRefMaj = loyerMensuelRefMajInput.value;

  // Affichez la valeur dans la console
  console.log("Loyer mensuel de référence majoré de l'utilisateur : " + loyerMensuelRefMaj);
  show('span_loyer_refMaj', loyerMensuelRefMaj)
});

// Sélectionnez l'élément textarea par son ID
var complementLoyerTextarea = document.getElementById("complementLoyer");

if(complementLoyerTextarea) {

// Créez un gestionnaire d'événement pour l'événement "input"
complementLoyerTextarea.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var complementLoyer = complementLoyerTextarea.value;

  // Affichez la valeur dans la console
  console.log("Complément de loyer de l'utilisateur : " + complementLoyer);
});

}

const locataireChamps = document.getElementById("locataireChamps");

// Sélectionnez le <select> par son ID
const selectLocataire = document.getElementById("locataireDepart");


if(selectLocataire) {

// Ajoutez un gestionnaire d'événement "change" au <select>
selectLocataire.addEventListener("change", function () {
  // Récupérez la valeur sélectionnée du <select>
  const selectedValue = selectLocataire.value;

  // En fonction de la valeur sélectionnée, ajoutez du code HTML à la <div> "locataireChamps"
  if (selectedValue === "moins_18") {
    locataireChamps.innerHTML = ` 
     <div class="input-container">
       <label for="loyerVerser">Dernier loyer versé</label>
       <input type="text" id="loyerVerser" name="loyerVerser">
     </div>
                   
     <div class="input-container">
       <label for="dateDernierVersement">Date du dernier versement</label>
       <input type="date" id="dateDernierVersement" name="dateDernierVersement">
     </div>

     <div class="input-container">
       <label for="dateRevisionDernierLoyer">Date de révision du dernier loyer</label>
       <input type="date" id="dateRevisionDernierLoyer" name="dateRevisionDernierLoyer">
     </div>`;

    // Ajoutez des gestionnaires d'événements pour les éléments <input> ici
    var dernierLoyerVerserInput = document.getElementById("loyerVerser");
    dernierLoyerVerserInput.addEventListener("input", function () {
      var dernierLoyerVerser = dernierLoyerVerserInput.value;
      console.log("Dernier loyer versé par l'utilisateur : " + dernierLoyerVerser);
    });

    var dateDernierVersementInput = document.getElementById("dateDernierVersement");
    dateDernierVersementInput.addEventListener("change", function () {
      var dateDernierVersement = dateDernierVersementInput.value;
      console.log("Date du dernier versement par l'utilisateur : " + dateDernierVersement);
    });

    var dateRevisionDernierLoyerInput = document.getElementById("dateRevisionDernierLoyer");
    dateRevisionDernierLoyerInput.addEventListener("change", function () {
      var dateRevisionDernierLoyer = dateRevisionDernierLoyerInput.value;
      console.log("Date de révision du dernier loyer par l'utilisateur : " + dateRevisionDernierLoyer);
    });
  } else if (selectedValue === "2") {
    locataireChamps.innerHTML = "<p>Code HTML pour la valeur 2</p>";
  } else if (selectedValue === "3") {
    locataireChamps.innerHTML = "<p>Code HTML pour la valeur 3</p>";
  } else {
    // Si aucune valeur correspondante n'est trouvée, effacez le contenu de la <div>
    locataireChamps.innerHTML = "";
  }
});
}


// Sélectionnez l'élément select pour le trimestre de référence pour l'IRL par son ID
var trimRefIRLSelect = document.getElementById("trimRefIRL");

// Créez un gestionnaire d'événement pour l'événement "change"
trimRefIRLSelect.addEventListener("change", function () {
  // Récupérez la valeur sélectionnée par l'utilisateur
  var trimRefIRL = trimRefIRLSelect.value;

  // Affichez la valeur dans la console
  console.log("Trimestre de référence pour l'IRL sélectionné par l'utilisateur : " + trimRefIRL);
  show('span_ref_irl', trimRefIRL.split('_')[1])
});

// Sélectionnez l'élément select pour la date de révision du loyer par son ID
var dateRevisionLoyerSelect = document.getElementById("dateRevisionLoyer");

// Créez un gestionnaire d'événement pour l'événement "change"
dateRevisionLoyerSelect.addEventListener("change", function () {
  // Récupérez la valeur sélectionnée par l'utilisateur
  var dateRevisionLoyer = dateRevisionLoyerSelect.value;

  // Affichez la valeur dans la console
  console.log("Date de révision du loyer sélectionnée par l'utilisateur : " + dateRevisionLoyer);

  if (dateRevisionLoyer == "anniversaire") {
    show('span_date_revision', "date d'anniversaire du bail")
  } else if (dateRevisionLoyer == "suivant") {
    show('span_date_revision', "mois suivant la date d'anniversaire du bail")
  } else if (dateRevisionLoyer == "janvier") {
    show('span_date_revision', "au 1er janvier suivant la date du bail")
  }
});

// Sélectionnez l'élément select pour le départ du locataire précédent par son ID
var locataireDepartSelect = document.getElementById("locataireDepart");

if(locataireDepartSelect) {
// Créez un gestionnaire d'événement pour l'événement "change"
locataireDepartSelect.addEventListener("change", function () {
  // Récupérez la valeur sélectionnée par l'utilisateur
  var locataireDepart = locataireDepartSelect.value;

  // Affichez la valeur dans la console
  console.log("Départ du locataire précédent sélectionné par l'utilisateur : " + locataireDepart);

  var dateDepart = document.getElementById("dateDepart");
  if (locataireDepart == "moins_18") {




  }
});
}

// Sélectionnez l'élément input pour la date d'entrée par son ID
var dateEntreeInput = document.getElementById("dateEntree");

// Créez un gestionnaire d'événement pour l'événement "change"
dateEntreeInput.addEventListener("change", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var dateEntree = dateEntreeInput.value;

  // Affichez la valeur dans la console
  console.log("Date d'entrée de l'utilisateur : " + dateEntree);
});

// Sélectionnez l'élément input pour la durée du contrat par son ID
var dureeContratInput = document.getElementById("dureeContrat");

// Créez un gestionnaire d'événement pour l'événement "input"
dureeContratInput.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var dureeContrat = dureeContratInput.value;

  // Affichez la valeur dans la console
  console.log("Durée du contrat de l'utilisateur : " + dureeContrat);

  show('span_duree_contrat', dureeContrat)
});

// Sélectionnez l'élément input pour le complément de loyer par son ID
var complementLoyerTextarea = document.getElementById("validationComplement");

if(complementLoyerTextarea) {

// Créez un gestionnaire d'événement pour l'événement "input"
complementLoyerTextarea.addEventListener("input", function () {
  // Récupérez la valeur entrée par l'utilisateur
  var complementLoyer = complementLoyerTextarea.value;

  // Affichez la valeur dans la console
  console.log("Complément de loyer de l'utilisateur : " + complementLoyer);
});
}


// Sélectionnez l'élément select pour le paiement du loyer par son ID
var PaiementLoyerSelect = document.getElementById("PaiementLoyer");

// Créez un gestionnaire d'événement pour l'événement "change"
PaiementLoyerSelect.addEventListener("change", function () {
  // Récupérez la valeur sélectionnée par l'utilisateur
  var PaiementLoyer = PaiementLoyerSelect.value;

  // Affichez la valeur dans la console
  console.log("Paiement du loyer sélectionné par l'utilisateur : " + PaiementLoyer);
});

// Fonction pour afficher ou masquer le div "contratBlock"
function afficherTextarea(checkboxId, divId) {
  var checkbox = document.getElementById(checkboxId);
  var div = document.getElementById(divId);
  if (checkbox.checked) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

// Fonction pour changer la couleur de fond d'un élément div
function changeBackgroundColor(element, value, selectId) {
  var select = document.getElementById(selectId);
  select.value = value;
  element.style.backgroundColor = "lightblue";
}

const selectCharges = document.getElementById("selectCharges");

// Ajout d'un gestionnaire d'événements "change"
selectCharges.addEventListener("change", function () {
  // Récupérer la valeur sélectionnée
  const selectedValue = selectCharges.value;

  // Faire quelque chose en fonction de la valeur sélectionnée
  console.log("Option sélectionnée : " + selectedValue);

  const div = document.getElementById("chargeRecuperables");

  if (selectedValue == 'provisions') {
    div.innerHTML = `
    <p>Modalité de règlement des charges récupérables : <span id="">provisions sur charges</span></p>
    <p>Montant de la provision sur charges : <span id="span_montant_charge_mensuel"></span></p>
    <p>Cette provision pour charges pourra être réévaluée à chaque régularisation, à la hausse ou à la baisse, en fonction des charges réelles.</p>
`
  } else if (selectedValue == 'sans-provisions') {
    div.innerHTML = `<p>Modalité de règlement des charges récupérables : <span>paiement périodique sans provisions</span>`
  } else if (selectedValue == 'pas-charges') {
    div.innerHTML = `<p>Modalité de règlement des charges récupérables : <span>absence de charges</span>`
  }
});


const inputCharge = document.getElementById("montant_charge_mensuel");

// Ajout d'un gestionnaire d'événements, par exemple "input" pour réagir aux modifications de l'input
inputCharge.addEventListener("input", function () {
  // Récupérer la valeur de l'input
  const inputValue = inputCharge.value;

  // Faire quelque chose en fonction de la valeur de l'input
  console.log("Valeur de l'input : " + inputValue);
  show("span_montant_charge_mensuel", inputValue)
  show("span_montant_charge_mensuel_array", inputValue + "€")
  totalLoyer += inputValue;

});




