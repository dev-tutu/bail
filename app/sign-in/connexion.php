<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include './app/sign-in/php/connexion.php';
    connexion();
  }

 
  if(isset($_GET['success'])) {
    $information = "Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.";
  }else if(isset($_GET['reset'])) {
    $information = "Nous espérons que vous allez bien. Vous avez récemment demandé la réinitialisation de votre mot de passe pour votre compte [Nom du compte/service]. Pour procéder à la réinitialisation, nous avons envoyé un lien de réinitialisation à votre adresse e-mail enregistrée.
    Veuillez vérifier votre boîte de réception, y compris le dossier des courriers indésirables (spam), au cas où notre e-mail aurait été dirigé là-bas par erreur.
    Si vous ne trouvez pas l'e-mail dans votre boîte de réception, veuillez patienter quelques minutes, car il peut parfois y avoir un léger délai dans la réception des e-mails. Assurez-vous également que l'adresse e-mail [Adresse e-mail de l'utilisateur] est correcte.
    Cliquez sur le lien de réinitialisation contenu dans l'e-mail pour suivre les instructions et réinitialiser votre mot de passe en toute sécurité. Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail ou nous contacter immédiatement si vous pensez qu'il s'agit d'une activité suspecte.";
  }else if(isset($_GET['reset-confirme'])) {
    $information = "Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter en utilisant votre nouveau mot de passe. Si vous avez d'autres questions ou avez besoin d'assistance, n'hésitez pas à nous contacter. Merci !";
  }else if(isset($_GET['password'])){
    $information = "Email ou mot de passe incorrect."; 
  }

?>


<link href="./app/sign-in/css/style.css" rel="stylesheet"/>
<link href="./app/sign-in/css/modal.css" rel="stylesheet"/>

<main class="main-content  mt-0">



  <section>

    <div class="page-header min-vh-100">
      <div class="container">

        <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
            <div class="card card-plain">

              <div class="card-header pb-0 text-start">
                <h4 class="font-weight-bolder">Connection</h4>
                <p id="message" class="mb-0">Entrer votre email et mot de passe</p>
              </div>

              <div class="card-body">

                <form action="" method="post">

                  <div class="mb-3">
                    <input id="email_login" type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Name" name="email_login" value="">
                  </div>

                    <div class="mb-3">
                      <input id="password" type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" name="password" value="">
                    </div>

                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="rememberMe" name="rememberMe">
                      <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
                    </div>

                    <div class="text-center">
                      <input type="submit" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0" value="connection"></input>
                    </div>
        
       
                </form>


               </div>

                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-4 text-sm mx-auto">
                    Vous avez oublié votre mot de passe ?
                    <br>
                    <a  id="resetAccountBtn" class="text-primary text-gradient font-weight-bold">réinitialiser votre mot de passe</a>
                  </p>
                </div>

            

            <div class="card-footer text-center pt-0 px-lg-2 px-1">
              <p class="mb-4 text-sm mx-auto">
                Vous n'avez pas de compte?
                <a id="createAccountBtn" class="text-primary text-gradient font-weight-bold">inscrivez-vous</a>
              </p>
            </div>

          </div>
        </div>

        <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
          <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style="background-image: url('./app/sign-in/sign-in.jpg'); background-size: cover;">
            <span class="mask bg-gradient-primary opacity-6"></span>
            <h4 class="mt-5 text-white font-weight-bolder position-relative">"Une nouvelle gestion pour une vie meilleure"</h4>
            <p class="text-white position-relative">Notre outil vous permettra d'avoir des finances plus saine pour une meilleure vie</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</main>


<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <p id="countdown">La fenêtre se fermera automatiquement dans <span id="countdownValue">5</span> secondes.</p>
        <p><?=  $information ?></p>
    </div>
</div>

<script src="./app/sign-in/js/cookie.js"></script>
<script src="./app/sign-in/js/connexion.js"></script>
<script src="./assets/js/modal.js"></script>

