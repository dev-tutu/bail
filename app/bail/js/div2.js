
const values = {
    nombre_place: "",
    surface_habitable: "",
    adresse: ""
};

const inputNbPiece = document.getElementById("nb_piece");

// Ajoutez un gestionnaire d'événement pour écouter les changements de saisie
inputNbPiece.addEventListener("input", function() {
  // Récupérez la valeur de l'input
  values.nombre_place = inputNbPiece.value;
  ShowNombrePlace();
});




// Sélectionnez l'élément input par son ID
const inputSurface = document.getElementById("surface");

// Ajoutez un gestionnaire d'événement pour écouter les changements de saisie
inputSurface.addEventListener("input", function() {
  // Récupérez la valeur de l'input
  values.surface_habitable = inputSurface.value;
  ShowSurface();
});

// Sélectionnez l'élément input par son ID
const inputAdresseBien = document.getElementById("adresse_bien");

// Ajoutez un gestionnaire d'événement pour écouter les changements de saisie
inputAdresseBien.addEventListener("input", function() {
    // Récupérez la valeur de l'input
    values.adresse = inputAdresseBien.value;
    console.log(values.adresse);
    ShowAdresse();
});

// PARTIE TEXTE
var divPlace = document.getElementById("nombre_place");
var divSurface = document.getElementById("surface_habitable");
var divAdresse = document.getElementById("adresse_logement");

ShowNombrePlace();
ShowSurface();
ShowAdresse();





function ShowNombrePlace()
{
    let codeHTML = `<p>${values.nombre_place}</p>`;
    divPlace.innerHTML = codeHTML;
} 

function ShowSurface()
{
    let codeHTML = `<p>${values.surface_habitable}</p>`;
    divSurface.innerHTML = codeHTML;
} 

function ShowAdresse()
{
    let codeHTML = `<p>${values.adresse}</p>`;
    divAdresse.innerHTML = codeHTML;
} 


var inputElement = document.getElementById("periode_construction");

// Ajoutez un écouteur d'événements pour détecter les changements dans l'élément input
inputElement.addEventListener("input", function () {
            // Cette fonction sera exécutée chaque fois que l'utilisateur saisit quelque chose dans l'input
            console.log("La valeur a changé : " + inputElement.value);
            show('span_' + this.id, this.value)
        });




