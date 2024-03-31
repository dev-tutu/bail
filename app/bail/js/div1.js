// jshint esversion: 6

let maDiv = null;

const choixDuModele = {
  type_location: "", 
  type_beaux: "",
  type_proprietaire: "",
  type_paiement: "",
  type_assurance: ""
};



let selectedDivTypeLocation = null;
let selectedDivTypeBeaux = null;
let selectedDivTypeProprieter = null;
let selectedDivTypePaiement = null;
let selectedDivTypeAssurance = null;

let selectedDivElec= null;
let selectedDivEau= null;
let selectedDivHabitation= null;
let selectedDivRegime= null;

let selectedDivElecEnergie= null;
let selectedDivEauEnergie= null;

const descriptionLogement = {
  electricite: "", 
  eau: "", 
  habitation: "",
  regime: "",
  energie_elec: "",
  energie_eau: "",
};

function changeBackgroundColor(divElement, buttonValue, eltChamp) {

  // Réinitialiser la couleur de fond des divs précédemment sélectionnées dans chaque groupe
  if (eltChamp === "type_location" && selectedDivTypeLocation !== null) {
      selectedDivTypeLocation.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_beaux" && selectedDivTypeBeaux !== null) {
      selectedDivTypeBeaux.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_proprietaire" && selectedDivTypeProprieter !== null) {
      selectedDivTypeProprieter.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_paiement" && selectedDivTypePaiement !== null) {
    selectedDivTypePaiement.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "consomation_electrique" && selectedDivElec !== null) {
    selectedDivElec.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "consomation_eau" && selectedDivEau !== null) {
    selectedDivEau.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_habitation" && selectedDivHabitation !== null) {
    selectedDivHabitation.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_regime" && selectedDivRegime !== null) {
    selectedDivRegime.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_energie_chauffage" && selectedDivElecEnergie !== null) {
    selectedDivElecEnergie.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_energie_eau" && selectedDivEauEnergie !== null) {
    selectedDivEauEnergie.style.backgroundColor = "#F5F5F5";
  } else if (eltChamp === "type_assurance" && selectedDivTypeAssurance !== null) {
    selectedDivTypeAssurance.style.backgroundColor = "#F5F5F5";
  }

  // Changer la couleur de fond de la div actuellement sélectionnée
  divElement.style.backgroundColor = "#a896d8"; // Nouvelle couleur de fond

  // Mettre à jour la div actuellement sélectionnée dans le groupe approprié
  if (eltChamp === "type_location") {
    selectedDivTypeLocation = divElement;
  } else if (eltChamp === "type_beaux") {
    selectedDivTypeBeaux = divElement;
  } else if (eltChamp === "type_proprietaire") {
    selectedDivTypeProprieter = divElement;
  } else if (eltChamp === "type_paiement") {
    selectedDivTypePaiement = divElement;
  } else if (eltChamp === "consomation_electrique") {
    selectedDivElec = divElement;
  } else if (eltChamp === "consomation_eau") {
    selectedDivEau = divElement;
  } else if (eltChamp === "type_habitation") {
    selectedDivHabitation = divElement;
  } else if (eltChamp === "type_regime") {
    selectedDivRegime = divElement;
  } else if (eltChamp === "type_energie_chauffage") {
    selectedDivElecEnergie = divElement;
  } else if (eltChamp === "type_energie_eau") {
    selectedDivEauEnergie = divElement;
  } else if (eltChamp === "type_assurance") {
    selectedDivTypeAssurance = divElement;
  }

  // Autres actions à effectuer
  valueChoixModele(buttonValue, eltChamp);
  maDiv = buttonValue;
}

function valueChoixModele(buttonValue,eltChamp) {

  if(eltChamp == 'type_location') {
    choixDuModele.type_location = buttonValue;
    ShowTypeLocation();
  } else if(eltChamp == 'type_beaux') {
    choixDuModele.type_beaux = buttonValue;
    ShowTypeBeaux();
  } else if(eltChamp == 'type_proprietaire') {
    choixDuModele.type_proprietaire = buttonValue;
    ShowTypePropr();
  } else if(eltChamp == 'type_paiement') {
    choixDuModele.type_paiement = buttonValue;
    show('span_temps_paiement',choixDuModele.type_paiement);
  } else if(eltChamp == 'consomation_electrique') {
    descriptionLogement.electricite = buttonValue;
    show('span_production_chauffage',descriptionLogement.electricite);
  } else if(eltChamp == 'consomation_eau') {
    descriptionLogement.eau = buttonValue;
    show('span_eau_sanitaire',descriptionLogement.eau);
  } else if(eltChamp == 'type_habitation') {
    descriptionLogement.habitation = buttonValue;
    ShowTypeHabitation();
  } else if(eltChamp == 'type_regime') {
    descriptionLogement.regime = buttonValue;
    show('span_type_juridique',descriptionLogement.regime);
  } else if(eltChamp == 'type_energie_chauffage') {
    descriptionLogement.energie_elec = buttonValue;
    show('span_type_chauffage',descriptionLogement.energie_elec);
  } else if(eltChamp == 'type_energie_eau') {
    descriptionLogement.energie_eau = buttonValue;
    show('span_type_eau',descriptionLogement.energie_eau);
  } else if(eltChamp == 'type_assurance') {
    choixDuModele.type_assurance = buttonValue;
    show('span_assurance',choixDuModele.type_assurance);
  }

  console.log(descriptionLogement);

}

/// PARTIE TEXTE
var typeLocationText = document.getElementById("type_location_text");
var typeBeauxText = document.getElementById("type_beaux_text");
var typeProprietaireText = document.getElementById("type_proprietaire_text");

var typeHabitationText = document.getElementById("span_type_habitation");

ShowTypeLocation();
ShowTypeBeaux();
ShowTypePropr();

function ShowTypeLocation()
{
    let codeHTML = `<p>${choixDuModele.type_location}</p>`;
    if(typeLocationText != null) {
      typeLocationText.innerHTML = codeHTML;
    }
}

function ShowTypeBeaux()
{
    let codeHTML = `<p>${choixDuModele.type_beaux}</p>`;
    if(typeBeauxText != null) {
    typeBeauxText.innerHTML = codeHTML;
    }
}

function ShowTypePropr()
{
    let codeHTML = `<p>${choixDuModele.type_proprietaire}</p>`;
    if(typeProprietaireText != null) {
    typeProprietaireText.innerHTML = codeHTML;
    }
}

function ShowTypeHabitation()
{
    let codeHTML = `<p>${descriptionLogement.habitation}</p>`;
    if(typeHabitationText != null) {
    typeHabitationText.innerHTML = codeHTML;
    }
}


function show(id,variable) {

  const span = document.getElementById(id);
  let codeHTML = `<p>${variable}</p>`;
  if(span != null) {
    span.innerHTML = codeHTML;
  }

}