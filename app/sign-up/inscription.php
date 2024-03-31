<?php


  // Vérification des données de connexion
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include './app/sign-up/php/inscription.php';
    inscription();
  }

  $age = 0;

?>


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<link href="./app/sign-up/css/style.css" rel="stylesheet"/>
<link href="./app/sign-up/css/modal.css" rel="stylesheet"/>



   
    
<div class="row">
  <div class="col-md-12">

    <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style="background-image: url('./app/sign-up/sign-up.jpg'); background-position: top;">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
          </div>
        </div>
      </div>
    </div>

    <form action="" method="post" class="was-validated">
      <h1> Inscription </h1>
        
      <fieldset>
          
        <legend><span class="number">1</span> Informations Personnelles</legend>

        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <input type="text" class="form-control" id="name" name="user_nom" required>

          <div class="invalid-feedback">
            Veuillez entrer votre nom.
          </div>
        </div>

        <div class="mb-3">
          <label for="prenom" class="form-label">Prenom</label>
          <input type="text" class="form-control" id="prenom" name="user_prenom" required>

          <div class="invalid-feedback">
            Veuillez entrer votre prénom.
          </div>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" name="user_email" required>

          <div class="invalid-feedback">
            Veuillez entrer votre email valide.
          </div>
        </div>
        

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="user_password" required>
          
          <!-- Affichage de la force du mot de passe -->
          <div id="password-strength" class="mt-2"></div>

          <div class="invalid-feedback">
            Le mot de passe doit être fort. Il doit contenir au moins 8 caractères, y compris des lettres majuscules, des lettres minuscules, des chiffres et des caractères spéciaux.
          </div>
        </div>


        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control <?php if ($age < 18) echo 'is-invalid'; ?>" id="age" name="user_age" min="18" required>

          <div class="invalid-feedback">
            Veuillez entrer votre âge, vous devez avoir plus de 18ans.
          </div>
        </div>

        <div class="mb-3">
          <label for="role">Role:</label>
          <select class="form-select" name="user_role" required aria-label="Choisir votre rôle">
            <option value="">Choisir votre rôle</option>
            <option value="bailleur morale">Bailleur morale</option>
            <option value="bailleur physique">Bailleur physique</option>
            <option value="locataire">Locataire</option>
          </select>

          <div class="invalid-feedback">
            Veuillez sélectionner votre rôle.
          </div>
        </div>
        
      </fieldset>

      <fieldset>  
        
        <legend><span class="number">2</span> Adresse</legend>

        <div class="mb-3">
          <label for="n°" class="form-label">N°</label>
          <input type="number" class="form-control" id="n°" name="adresse_n°"  required>

          <div class="invalid-feedback">
            Veuillez entrer le code postale de la ville.
          </div>
        </div>

        <div class="mb-3">
          <label for="rue" class="form-label">Rue</label>
          <input type="text" class="form-control" id="rue" name="adresse_rue" required>

          <div class="invalid-feedback">
            Veuillez entrer le nom de la rue.
          </div>
        </div>

        <div class="mb-3">
          <label for="ville" class="form-label">Ville</label>
          <input type="text" class="form-control" id="ville" name="adresse_ville"  required>

          <div class="invalid-feedback">
            Veuillez entrer le nom d'une ville.
          </div>
        </div>

        <div class="mb-3">
          <label for="code_postale" class="form-label">Code Postale</label>
          <input type="text" class="form-control" id="code_postale" name="adresse_codePostal"  required>

          <div class="invalid-feedback">
            Veuillez entrer le code postale de la ville.
          </div>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="contratUtilisation" required>
            <label class="form-check-label" for="contratUtilisation">J'ai lu et accepté le <a href="#" data-toggle="modal" data-target="#reglesModal">contrat d'utilisation</a></label>

            <div class="invalid-feedback">
              Veuillez lire les conditions du site
            </div>
          </div>
        </div>





      </fieldset>
      
      <button id="submit" type="submit">S'inscrire</button>    
    </form>
  </div>
</div>



<script>
    $(document).ready(function() {
        $('#contratUtilisation').change(function() {
            if (this.checked) {
                $('#validerBtn').prop('disabled', false);
            } else {
                $('#validerBtn').prop('disabled', true);
            }
        });
    });
</script>

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <p id="countdown">La fenêtre se fermera automatiquement dans <span id="countdownValue">5</span> secondes.</p>
        <p>Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.</p>
    </div>
</div>

<div class="modal fade" id="reglesModal" tabindex="-1" role="dialog" aria-labelledby="reglesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="reglesModalLabel">Règles du site</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Contenu des règles du site ici -->
                <p>Insérez ici le contenu des règles du site.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
            </div>
        </div>
    </div>
</div>






<script src="./assets/js/modal.js"></script>
<script src="./app/sign-up/js/inscription.js"></script>
