


function afficherModel() {
  // Sélectionnez la case à cocher par son ID
  const checkbox = document.getElementById("modelCaution");

  // Sélectionnez la div du textarea par son ID
  const textareaDiv = document.getElementById("textareaCaution");

  // Vérifiez si la case à cocher est cochée
  if (checkbox.checked) {
    // Affichez la div du textarea
    textareaDiv.style.display = "block";
  } else {
    // Masquez la div du textarea
    textareaDiv.style.display = "none";
  }
}




const choixDesDocuments = {
  etat_des_lieux: false,
  informations: false,
  inventaire: false,
  charge: false,
  reparation: false,
  vetuster: false,
  parking: false,
  acte_caution: false,
};


// Sélectionnez toutes les cases à cocher dans le formulaire par leur classe "form-check-input"
const checkboxes = document.querySelectorAll('.form-check-input');

// Parcourez toutes les cases à cocher et ajoutez un gestionnaire d'événements à chacune d'entre elles
checkboxes.forEach(function (checkbox) {

  console.log('hello');
  checkbox.addEventListener('change', function () {
    // Le code à exécuter lorsque la case à cocher est cochée ou décochée
    if (this.checked) {
      // La case à cocher est cochée, vous pouvez mettre ici le code correspondant
      console.log('La case à cocher ' + this.id + ' est cochée.');
      doc(true, this.id,);

      switch (this.id) {

        case "acte_caution":
          annexe_doc = document.getElementById("annexe_acte_cautionnement");
          annexe_doc.innerHTML = "acte de cautionnement"
          break;

        case "etat_des_lieux":
          annexe_doc = document.getElementById("annexe_etat_lieux");
          annexe_doc.innerHTML = "un état des lieux"
          break;

        case "notice_information":
          annexe_doc = document.getElementById("annexe_notice_information");
          annexe_doc.innerHTML = `une notice d’information relative aux droits et obligations des
           locataires et des bailleurs`
          break;

        case "inventaire_meubles":
          annexe_doc = document.getElementById("annexe_inventaire_meubles");
          annexe_doc.innerHTML = "un inventaire et un état détaillé du mobilier"
          break;

        case "charge":
          annexe_doc = document.getElementById("annexe_charges_recuperable");
          annexe_doc.innerHTML = "la liste des charges récupérables"
          break;

        case "reparation_locative":
          annexe_doc = document.getElementById("annexe_reparation_locative");
          annexe_doc.innerHTML = "la liste des réparations locatives"
          break;

        case "calcul_degradation":
          annexe_doc = document.getElementById("annexe_grille_vetuster");
          annexe_doc.innerHTML = "la grille de vétusté pour calcul des dégradations"
          break;

        case "parking_independant":
          annexe_doc = document.getElementById("annexe_parking");
          annexe_doc.innerHTML = "la grille de vétusté pour calcul des dégradations"
          break;

      }

      if (this.id == "contrat") {

        var raisonJustifiantTextarea = document.getElementById("pRaisonJustifiant");
        raisonJustifiantTextarea.innerHTML = `<p>Événement et raison justifiant la durée réduite du contrat de location : <span id="span_duree_reduite"></span></p>`
      }

    } else {
      // La case à cocher est décochée, vous pouvez mettre ici le code correspondant
      console.log('La case à cocher ' + this.id + ' est décochée.');
      doc(false, this.id);

      if (this.id == "contrat") {

        var raisonJustifiantTextarea = document.getElementById("pRaisonJustifiant");
        raisonJustifiantTextarea.innerHTML = ``
      }

      switch (this.id) {

         case "acte_caution":
          annexe_doc = document.getElementById("annexe_acte_cautionnement");
          annexe_doc.innerHTML = ""
          break;

        case "etat_des_lieux":
          annexe_doc = document.getElementById("annexe_etat_lieux");
          annexe_doc.innerHTML = ""
          break;

        case "notice_information":
          annexe_doc = document.getElementById("annexe_notice_information");
          annexe_doc.innerHTML = ""
          break;

        case "inventaire_meubles":
          annexe_doc = document.getElementById("annexe_inventaire_meubles");
          annexe_doc.innerHTML = ""
          break;

        case "charge":
          annexe_doc = document.getElementById("annexe_charges_recuperable");
          annexe_doc.innerHTML = ""
          break;

        case "reparation_locative":
          annexe_doc = document.getElementById("annexe_reparation_locative");
          annexe_doc.innerHTML = ""
          break;

        case "calcul_degradation":
          annexe_doc = document.getElementById("annexe_grille_vetuster");
          annexe_doc.innerHTML = ""
          break;

        case "parking_independant":
          annexe_doc = document.getElementById("annexe_parking");
          annexe_doc.innerHTML = ""
          break;

      }
    }
  });
});



function doc(bool, file) {

  console.log(bool);

  switch (file) {

    case 'acte_caution':
      choixDesDocuments.acte_caution = bool;
      break;

    case 'etat_des_lieux':
      choixDesDocuments.etat_des_lieux = bool;
      break;

    case 'notice_information':
      choixDesDocuments.informations = bool;
      break;

    case 'inventaire_meubles':
      choixDesDocuments.inventaire = bool;
      break;

    case 'charge':
      choixDesDocuments.charge = bool;
      break;

    case 'reparation_locative':
      choixDesDocuments.reparation = bool;
      break;

    case 'calcul_degradation':
      choixDesDocuments.vetuster = bool;
      break;

    case 'parking_independant':
      choixDesDocuments.parking = bool;
      break;

  }

}

function updateLabel() {
  const fileInput = document.getElementById("file");
  const customFileLabel = document.querySelector(".custom-file-label");

  if (fileInput.files.length > 0) {
    customFileLabel.textContent = "";
    customFileLabel.textContent = fileInput.files[0].name;
  } else {
    customFileLabel.textContent = "Parcourir";
  }
}

function addFile() {
  const fileInput = document.getElementById("file");
  const fileTypeSelect = document.getElementById("fileType");
  const filePropContainer = document.getElementById("file_prop");
  const autreAnnexeDiv = document.getElementById("autreAnnexe"); // Sélectionnez la div autreAnnexe

  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    const selectedFileType = fileTypeSelect.options[fileTypeSelect.selectedIndex].text;

    // Créez un élément de div pour afficher les informations du fichier
    const fileDiv = document.createElement("div");
    fileDiv.className = "file-info";

    // Affiche le nom du fichier
    const fileNameElement = document.createElement("p");
    fileNameElement.textContent = `${fileName} `;

    // Créez un lien de téléchargement caché
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(fileInput.files[0]);
    downloadLink.download = fileName;
    downloadLink.style.display = "none";

    // Affiche le type du fichier
    const fileTypeElement = document.createElement("p");
    fileTypeElement.textContent = ` ${selectedFileType}`;

    // Ajoute un bouton pour supprimer le fichier
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.onclick = function () {
      filePropContainer.removeChild(fileDiv);
    };

    fileDiv.appendChild(fileNameElement);
    fileDiv.appendChild(downloadLink);
    fileDiv.appendChild(fileTypeElement);
    fileDiv.appendChild(deleteButton);

    // Ajoute l'élément div à la section "file_prop"
    filePropContainer.appendChild(fileDiv);

    // Ajoute également le type de fichier à la div "autreAnnexe"
    autreAnnexeDiv.textContent = selectedFileType;

    // Réinitialise l'input de fichier et l'étiquette
    fileInput.value = null;
    const customFileLabel = document.querySelector(".custom-file-label");
    customFileLabel.textContent = "Parcourir";
  } else {
    alert("Veuillez sélectionner un fichier avant de l'ajouter.");
  }
}




function convertToList(idTexterea, idListe) {
  const textarea = document.getElementById(idTexterea);
  const text = textarea.value;
  const items = text.split(/\s+/); // Diviser le texte en utilisant espaces et retours à la ligne

  const resultList = document.getElementById(idListe);
  resultList.innerHTML = ''; // Effacer le contenu précédent de la liste

  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    resultList.appendChild(listItem);
  });
}