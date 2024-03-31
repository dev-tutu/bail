var nomLocataire = [''];
var prenomLocataire = [''];

var nomProrietaire = [""];
var prenomProrietaire = [""];




let mandataireCheckbox = document.getElementById("mandataire");
let mandataireTextarea = document.getElementById("mandataireValidation");
let mandataireText = "";

let adresse = document.getElementById("adresse_indivision");
let adresseText = "";



let divMandataireTextarea = document.getElementById("div3_mandataire_textarea");



  /// --------

 

  function afficherTextarea(idCheck,idTexterea) {
    // Sélectionnez la case à cocher par son ID
    const checkbox = document.getElementById(idCheck);

    // Sélectionnez la div du textarea par son ID
    const textareaDiv = document.getElementById(idTexterea);

    // Vérifiez si la case à cocher est cochée
    if (checkbox.checked) {
      // Affichez la div du textarea
      textareaDiv.style.display = "block";
    } else {
      // Masquez la div du textarea
      textareaDiv.style.display = "none";
    }
  }

  function afficherPlafond() {
    // Sélectionnez la case à cocher par son ID
    const checkbox = document.getElementById("gridplafond");
    const div = document.getElementById("plafonDiv4");

    const span = document.getElementById("span_arreter_prefectoral");

    // Sélectionnez la div du textarea par son ID
    const textareaDiv = document.getElementById("plafond");
    let newHTML = ``;

    // Vérifiez si la case à cocher est cochée
    if (checkbox.checked) {

      span.innerHTML = "OUI"



      // Affichez la div du textarea
      textareaDiv.style.display = "block";

    
       newHTML = `
  <p>Montant du loyer de référence : <span id="span_loyer_ref"></span>€ / mois</p>
  <p>Montant du loyer de référence majoré : <span id="span_loyer_refMaj"></span>€ / mois</p>
  <p>Complément de loyer : <ul id="resultComplementLoyer"></ul></p>
`;
    } else {
      // Masquez la div du textarea
      textareaDiv.style.display = "none";
      span.innerHTML = "NON"

    }

    div.innerHTML = newHTML;
  }

  if (typeof choixDuModele !== 'undefined' && choixDuModele.type_proprietaire === "Personne physique" )
  {
        mandataireCheckbox.addEventListener("click", function(event)
    {
        if (mandataireCheckbox.checked == false)
        {
            divMandataireTextarea.innerHTML = "";
        }

    });

    mandataireTextarea.addEventListener("input", function(event)
    {
        if (mandataireCheckbox.checked)
        {
            mandataireText = mandataireTextarea.value;
            ShowTextarea();
            
        }
    });

    adresse.addEventListener("input", function(event)
    {
        adresseText = adresse.value;
        console.log("adresse : " + adresseText); 
    });
  }
  
  /* PARTIE TEXTE */


ShowProprio();
ShowLocataires();



function ShowTextarea()
{
    if (mandataireCheckbox.checked)
    {
        divMandataireTextarea.style.display = "block";
        let codeHTML = `<p>${mandataireText}</p>`;
        divMandataireTextarea.innerHTML = codeHTML;
    }
    else 
    {
        divMandataireTextarea.style.display = "none";
        divMandataireTextarea.value = "";
    }
}