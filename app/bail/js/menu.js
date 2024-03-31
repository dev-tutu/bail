

const menuItems = document.querySelectorAll('.menu li');
let currentIndex = 0;

// Variable pour suivre l'état du bouton "Précédent"
let prevButtonCreated = false;


let compteurProprietaire = 0; // Initialisation du compteur
var nomProrietaire = [""];
var prenomProrietaire = [""];

let divProprietaireText = document.getElementById("div3_AjoutProprio");



function highlightNextMenuItem() {
  // Réinitialiser la classe "active" pour l'élément actuel
  menuItems[currentIndex].classList.remove('active');

  // Mettre en évidence le prochain élément du menu
  currentIndex = (currentIndex + 1) % menuItems.length;
  menuItems[currentIndex].classList.add('active');

  console.log("here: " + currentIndex);

  toggleDiv(menuItems[currentIndex].getAttribute('data-div'));

  // Vérifier si currentIndex est supérieur à 0
  if (currentIndex > 0) {
    // Vérifier si le bouton "Précédent" n'a pas déjà été créé
    if (!prevButtonCreated) {
      // Créer le bouton "Précédent"
      const prevButton = document.createElement('button');
      prevButton.className = 'next-button';
      prevButton.textContent = 'Précédent';
      prevButton.id = 'prev-button';
      prevButton.onclick = lowlightNextMenuItem;
      
      // Insérer le bouton "Précédent" au début de la div "pre-suit"
      const preSuitDiv = document.getElementById('pre-suit');
      preSuitDiv.insertBefore(prevButton, preSuitDiv.firstChild);
      
      // Mettre à jour l'état du bouton "Précédent"
      prevButtonCreated = true;
    }
  } else {
    // Si currentIndex est inférieur ou égal à 0, supprimer le bouton "Précédent" s'il existe
    const prevButton = document.querySelector('#pre-suit .next-button');
    if (prevButton) {
      prevButton.remove();
      // Mettre à jour l'état du bouton "Précédent"
      prevButtonCreated = false;
    }
  }
}



function lowlightNextMenuItem() {



  // Réinitialiser la classe "active" pour l'élément actuel
  menuItems[currentIndex].classList.remove('active');

  // Mettre en évidence l'élément précédent du menu
  currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
  menuItems[currentIndex].classList.add('active');

  toggleDiv(menuItems[currentIndex].getAttribute('data-div'));

  // Vérifier si currentIndex est supérieur à 0
  if (currentIndex > 0) {
    // Vérifier si le bouton "Précédent" n'a pas déjà été créé
    if (!prevButtonCreated) {
      // Créer le bouton "Précédent"
      const prevButton = document.createElement('button');
      prevButton.className = 'next-button';
      prevButton.textContent = 'Précédent';
      prevButton.onclick = lowlightNextMenuItem;

      // Insérer le bouton "Précédent" au début de la div "pre-suit"
      const preSuitDiv = document.getElementById('pre-suit');
      preSuitDiv.insertBefore(prevButton, preSuitDiv.firstChild);

      // Mettre à jour l'état du bouton "Précédent"
      prevButtonCreated = true;
    }
  }else {
    // Si currentIndex est inférieur ou égal à 0, supprimer le bouton "Précédent" s'il existe
    const prevButton = document.querySelector('#pre-suit .next-button');
    if (prevButton) {
      prevButton.remove();
      // Mettre à jour l'état du bouton "Précédent"
      prevButtonCreated = false;
    }
  }
}



let currentDivIndex = 'div1'; // Indice de la div actuellement affichée
toggleDiv(currentDivIndex);

function toggleDiv(newDivIndex) {
    // Masquer la div actuelle
    console.log(currentDivIndex);
    document.getElementById(`${currentDivIndex}`).style.display = "none";

    // Afficher la nouvelle div
    document.getElementById(`${newDivIndex}`).style.display = "block";

    currentDivIndex = newDivIndex;

    console.log('ma div est : ' + currentDivIndex );

    if(newDivIndex == "div3") {

      console.log('plop');

      var divProprietaireDiv3 = document.getElementById("proprietaireDiv3");
  
      var codeHTML = "";

       if(choixDuModele.type_proprietaire === "SCI familiale" ||  choixDuModele.type_proprietaire === 'Autre personne morale') {
        codeHTML = `

          <h1>Propriétaires</h1>

          <div class="input-container">
            <label for="denomination_sci">Dénomination de la SCI</label>
            <input type="text" id="nom_proprietaire0" name="denomination_sci">
          </div>


          <div class="col-9.5 espace">
            <label for="proprietaireAdresse">Adresse</label>
            <input type="text" class="form-control" placeholder="City" id="proprietaireAdresse">
          </div>

        `;

        
      } else{

        codeHTML = `
        <!-- proprietaire -->
          <h1>Propriétaires</h1>

          <div class="input-container">
            <label for="nom_proprietaire0">Nom</label>
            <input type="text" id="nom_proprietaire0" name="nom_proprietaire0">
          </div>

          <div class="input-container">
            <label for="prenom_proprietaire0">Prénom</label>
            <input type="text" id="prenom_proprietaire0" name="prenom_proprietaire0">
          </div>

          <div id="proprietaire"></div>

                  
          <div id="btn">
            <button type="button" class="btn-pro btn-link pl-0 pt-0" id="ajouterProprietaire">
              <i class="fas fa-plus" aria-hidden="true"></i> 
              Ajouter un propriétaire
            </button>       
          </div>

    
          <div class="col-9.5 espace">
            <label for="input1">Adresse de l'indivision</label>
            <input type="text" class="form-control" placeholder="City" id="proprietaireAdresse">
          </div>
        `;
      }



      divProprietaireDiv3.innerHTML = codeHTML;

      divProprietaireDiv3.innerHTML = codeHTML;

      const boutonAjouter = document.getElementById('ajouterProprietaire');
    const divProprietaire = document.getElementById('proprietaire');

    boutonAjouter.addEventListener('click', () => {
        // Incrémenter le compteur de propriétaires
        compteurProprietaire++;
        console.log("Compteur : " + compteurProprietaire);

        // Code HTML pour chaque propriétaire
        const codeHTML = `
            <div class="personne">
                <div class="input-container">
                    <label for="nom_proprietaire${compteurProprietaire}">Nom</label>
                    <input type="text" id="nom_proprietaire${compteurProprietaire}" name="nom_proprietaire${compteurProprietaire}">
                </div>
                <div class="input-container">
                    <label for="prenom_proprietaire${compteurProprietaire}">Prénom</label>
                    <input type="text" id="prenom_proprietaire${compteurProprietaire}" name="prenom_proprietaire${compteurProprietaire}">
                </div>
            </div>
        `;

        nomProrietaire.push("");
        prenomProrietaire.push("");
        ShowProprio();

        // Ajouter le code HTML à la div du propriétaire
        divProprietaire.insertAdjacentHTML('beforeend', codeHTML);

        // Sélectionnez la div avec l'ID "btn"
        const divBtn = document.getElementById("btn");

        // Vérifiez s'il existe déjà un bouton avec l'ID "supprimerProprietaire"
        const existingBtn = document.getElementById("supprimerProprietaire");

        // Si le bouton n'existe pas, ajoutez-le
        if (!existingBtn) {
            const button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn-pro btn-link pl-0 pt-0");
            button.setAttribute("style", "margin-top:1%;");
            button.setAttribute("id", "supprimerProprietaire");

            const icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-minus");
            icon.setAttribute("aria-hidden", "true");

            const textNode = document.createTextNode("Supprimer un propriétaire");

            button.appendChild(icon);
            button.appendChild(textNode);

            divBtn.appendChild(button);

            // Ajoutez l'événement "supprimerProprietaire" au bouton
            button.addEventListener("click", supprimerDernierProprietaire);
        }
    });

    function supprimerDernierProprietaire() {
      

      // Decrémetner le compteur de propriétaire
        compteurProprietaire--;
      // Sélectionnez tous les champs de propriétaire ayant la forme "nom_proprietaireX" et "prenom_proprietaireX"
      const inputs = divProprietaire.querySelectorAll("[id^='nom_proprietaire'], [id^='prenom_proprietaire']");

      // Supprimez les champs de propriétaire avec les numéros X les plus élevés
      let maxNumber = -1;
      let inputToRemove = null;

      inputs.forEach((input) => {
        const matches = input.id.match(/\d+/); // Trouvez le numéro X
        if (matches && parseInt(matches[0]) > maxNumber) {
            maxNumber = parseInt(matches[0]);
            inputToRemove = input;
        }
      });

      if (inputToRemove) {
        inputToRemove.closest('.personne').remove(); // Supprimez la div "personne" parente
      }

      nomProrietaire.pop();
      prenomProrietaire.pop();
      ShowProprio();

      // Vérifiez si la div "proprietaire" est vide
      if (divProprietaire.children.length === 0) {
        // Si la div est vide, supprimez le bouton "Supprimer un propriétaire"
        const buttonASupprimer = document.getElementById("supprimerProprietaire");
        if (buttonASupprimer) {
            buttonASupprimer.remove();
        }
      }
    }

    const divProprio = document.getElementById('proprietaireDiv3');

    // Ajoutez un écouteur d'événements "input" à la div du propriétaire
    divProprio.addEventListener('input', function (event) {
        // Vérifiez si l'élément de saisie est un champ de nom ou de prénom
        if (event.target.tagName === "INPUT" && (event.target.name.startsWith("nom_proprietaire") || event.target.name.startsWith("prenom_proprietaire"))) {
            const inputName = event.target.name;
            const inputValue = event.target.value;
            const inputId = event.target.id;

            // Utilisez une expression régulière pour rechercher le motif attendu
            const regex = /^(nom|prenom)_proprietaire(\d+)$/;

            // Testez si la chaîne correspond au motif
            const correspondance = inputName.match(regex);

            console.log(correspondance)

            if (correspondance !== null) {
              // correspondance[0] contient toute la chaîne correspondante
              // correspondance[1] contient "nom" ou "prenom"
              // correspondance[2] contient le chiffre
              const typeProprietaire = correspondance[1];
              const chiffre = correspondance[2];
              console.log("chiffre : " + chiffre);

              console.log("Type de propietaire : " + typeProprietaire);
              console.log("Chiffre : " + chiffre);


              if(typeProprietaire == "prenom") {
                prenomProrietaire[chiffre] = inputValue;
              } else if(typeProprietaire == "nom") {
                nomProrietaire[chiffre] = inputValue;
              }
            } else {
              console.log("La chaîne ne correspond pas au motif attendu.");
            }
            ShowProprio();
        }
    });

    var inputElementAdresse = document.getElementById("proprietaireAdresse");

    // Ajoutez un gestionnaire d'événements pour l'événement "input"
    inputElementAdresse.addEventListener("input", function() {
      // Code à exécuter lorsque l'utilisateur saisit du texte
      var text = inputElementAdresse.value;
      console.log("Texte saisi : " + text);
      show('span_adresse_domiciliation',text)

    });


      
    } 

    if(newDivIndex == "div4") {
      const selectElement = document.getElementById('trimRefIRL');

      // Parcourez le tableau 2D et ajoutez les options
      dataInsee.forEach((optionData) => {
        const option = document.createElement('option');
        option.value = optionData[0].replace('Q', 'T') + "_" + optionData[1]; // La valeur de l'option
        option.textContent = optionData[0].replace('Q', 'T').replace('-', ' ') + " " + optionData[1];
        selectElement.appendChild(option);
      });

    }

    if(newDivIndex == "div7") {
      // Sélectionnez l'élément à supprimer par son ID
      const buttonToRemove = document.getElementById('next-button');

      // Vérifiez si l'élément existe avant de le supprimer
      if (buttonToRemove) {
          buttonToRemove.remove();
      }
            
    }

    const preSuitDiv = document.getElementById('pre-suit');

    if (preSuitDiv) {
        // Vérifiez si le bouton avec l'ID "next-button" est présent
        let nextButton = document.getElementById('next-button');
        
        if (!nextButton && newDivIndex != "div1" && newDivIndex != "div7") {
            // Créez le bouton s'il n'est pas déjà présent
            nextButton = document.createElement('button');
            nextButton.id = 'next-button';
            nextButton.className = 'next-button';
            nextButton.textContent = 'Suivant';
            nextButton.onclick = highlightNextMenuItem;
    
            // Ajoutez le bouton au div "pre-suit"
            preSuitDiv.appendChild(nextButton);
        }
    } else {
        console.log("Le div 'pre-suit' n'a pas été trouvé.");
    }
    
 

    


    
}

// Écouteurs d'événements pour les éléments du menu
const Items = document.querySelectorAll('.menu li');
Items.forEach((item, index) => {
    item.addEventListener('click', function() {
        // Obtenez l'indice de la div associée à partir de l'attribut "data-div"

        console.log('brhvhrhvr');

        const targetDiv = this.getAttribute('data-div');
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        currentIndex = Array.from(menuItems).indexOf(item);
        this.classList.add("active");
   
        toggleDiv(this.getAttribute('data-div'));

        if (currentIndex > 0) {
          // Vérifier si le bouton "Précédent" n'a pas déjà été créé
          if (!prevButtonCreated) {
            // Créer le bouton "Précédent"
            const prevButton = document.createElement('button');
            prevButton.className = 'next-button';
            prevButton.textContent = 'Précédent';
            prevButton.onclick = lowlightNextMenuItem;
      
            // Insérer le bouton "Précédent" au début de la div "pre-suit"
            const preSuitDiv = document.getElementById('pre-suit');
            preSuitDiv.insertBefore(prevButton, preSuitDiv.firstChild);
      
            // Mettre à jour l'état du bouton "Précédent"
            prevButtonCreated = true;
          }
        }else {
          // Si currentIndex est inférieur ou égal à 0, supprimer le bouton "Précédent" s'il existe
          const prevButton = document.querySelector('#pre-suit .next-button');
          if (prevButton) {
            prevButton.remove();
            // Mettre à jour l'état du bouton "Précédent"
            prevButtonCreated = false;
          }
        }
    });
});




function ShowProprio()
{
    let codeHTML = "<p>";
    for (let i = 0; i < nomProrietaire.length; i++)
    {
        codeHTML += `- Propriétaire ${i+1} : ${nomProrietaire[i]} ${prenomProrietaire[i]}<br>`;
    }
    codeHTML += "</p>"; 
    divProprietaireText.innerHTML = codeHTML;
}


let compteurLocataire = 0;
var nomLocataire = [''];
var prenomLocataire = [''];
let divLocataireText = document.getElementById("div3_AjoutLocataire");

const boutonAjouter = document.getElementById('ajouterLocataire');
    const divLocataire = document.getElementById('locataires');

    boutonAjouter.addEventListener('click', () => {
        // Incrémenter le compteur de propriétaires
        compteurLocataire++;

        // Code HTML pour chaque propriétaire
        const codeHTML = `
            <div class="mylocataire">
                <div class="input-container">
                    <label for="nom_locataire${compteurLocataire}">Nom</label>
                    <input type="text" id="nom_locataire${compteurLocataire}" name="nom_locataire${compteurLocataire}">
                </div>
                <div class="input-container">
                    <label for="prenom_locataire${compteurLocataire}">Prénom</label>
                    <input type="text" id="prenom_locataire${compteurLocataire}" name="prenom_locataire${compteurLocataire}">
                </div>
            </div>
        `;

        nomLocataire.push('');
        prenomLocataire.push('');
        ShowLocataires();

        // Ajouter le code HTML à la div du propriétaire
        divLocataire.insertAdjacentHTML('beforeend', codeHTML);

        // Sélectionnez la div avec l'ID "btn"
        const divBtn = document.getElementById("btn-locataire");

        // Vérifiez s'il existe déjà un bouton avec l'ID "supprimerProprietaire"
        const existingBtn = document.getElementById("supprimerLocataire");

        // Si le bouton n'existe pas, ajoutez-le
        if (!existingBtn) {
            const button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn-pro btn-link pl-0 pt-0");
            button.setAttribute("style", "margin-top:1%;");
            button.setAttribute("id", "supprimerLocataire");

            const icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-minus");
            icon.setAttribute("aria-hidden", "true");

            const textNode = document.createTextNode("Supprimer un locataire");

            button.appendChild(icon);
            button.appendChild(textNode);

            divBtn.appendChild(button);

            // Ajoutez l'événement "supprimerProprietaire" au bouton
            button.addEventListener("click", supprimerDernierLocataire);
        }
    });

    function supprimerDernierLocataire() {
      // Sélectionnez tous les champs de propriétaire ayant la forme "nom_proprietaireX" et "prenom_proprietaireX"
      const inputs = divLocataire.querySelectorAll("[id^='nom_locataire'], [id^='prenom_locataire']");

      // Supprimez les champs de propriétaire avec les numéros X les plus élevés
      let maxNumber = -1;
      let inputToRemove = null;

      inputs.forEach((input) => {
        const matches = input.id.match(/\d+/); // Trouvez le numéro X
        if (matches && parseInt(matches[0]) > maxNumber) {
            maxNumber = parseInt(matches[0]);
            inputToRemove = input;
        }
      });

      if (inputToRemove) {
        inputToRemove.closest('.mylocataire').remove(); // Supprimez la div "personne" parente
      }
    

      compteurLocataire--;
      nomLocataire.pop();
      prenomLocataire.pop();
      ShowLocataires();
      // Vérifiez si la div "proprietaire" est vide
      if (divLocataire.children.length === 0) {
        // Si la div est vide, supprimez le bouton "Supprimer un propriétaire"
        const buttonASupprimer = document.getElementById("supprimerLocataire");
        if (buttonASupprimer) {
            buttonASupprimer.remove();
        }
      }
    }


    const divProprietaire = document.getElementById('locatairesDiv3');

    // Ajoutez un écouteur d'événements "input" à la div du propriétaire
    divProprietaire.addEventListener('input', function (event) {
        // Vérifiez si l'élément de saisie est un champ de nom ou de prénom
        if (event.target.tagName === "INPUT" && (event.target.name.startsWith("nom_locataire") || event.target.name.startsWith("prenom_locataire"))) {
            const inputName = event.target.name;
            const inputValue = event.target.value;
            const inputId = event.target.id;

            // Utilisez une expression régulière pour rechercher le motif attendu
            const regex = /^(nom|prenom)_locataire(\d+)$/;

            // Testez si la chaîne correspond au motif
            const correspondance = inputName.match(regex);

            console.log(correspondance)

            if (correspondance !== null) {
              // correspondance[0] contient toute la chaîne correspondante
              // correspondance[1] contient "nom" ou "prenom"
              // correspondance[2] contient le chiffre
              const typeLocataire = correspondance[1];
              const chiffre = correspondance[2];

              console.log("Type de locataire : " + typeLocataire);
              console.log("Chiffre : " + chiffre);


              if(typeLocataire == "prenom") {
                prenomLocataire[chiffre] = inputValue;
              } else if(typeLocataire == "nom") {
                nomLocataire[chiffre] = inputValue;
              }
            } else {
              console.log("La chaîne ne correspond pas au motif attendu.");
            }
            ShowLocataires();
            // Loguez l'ID et la valeur de l'input
            console.log(`Champ "${prenomLocataire[chiffre]}" (ID: ${inputId}): ${prenomLocataire[chiffre]}`);
            console.log("test");
        }
    });

    function ShowLocataires()
{
    let codeHTML = "<p>";
    for (let i = 0; i < nomLocataire.length; i++)
    {
        codeHTML += `- Locataires ${i+1} : ${nomLocataire[i]} ${prenomLocataire[i]}<br>`;
    }
    codeHTML += "</p>"; 
    divLocataireText.innerHTML = codeHTML;
}




