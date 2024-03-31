<?php


  // Vérification des données de connexion
  function inscription() {

    $greatData = true;

    $informations = array(
      "nom" => htmlspecialchars($_POST["user_nom"]),
      "prenom" => htmlspecialchars($_POST["user_prenom"]),
      "password" => htmlspecialchars($_POST["user_password"]),
      "email" => htmlspecialchars($_POST["user_email"]),
      "age" => htmlspecialchars($_POST["user_age"]),
      "role" => htmlspecialchars($_POST["user_role"])
    );

    $adresse = array(
      "n°" => htmlspecialchars($_POST["adresse_n°"]),
      "rue" => htmlspecialchars($_POST["adresse_rue"]),
      "codePostal" => htmlspecialchars($_POST["adresse_codePostal"]),
      "ville" => htmlspecialchars($_POST["adresse_ville"])
    );


    if (getPasswordStrength($informations['password'])!== "strong") {
      $greatData = false;
      $GLOBALS['logManager']->log("Le mot de passe n'est pas assez fort. Il manque : $passwordStrength",'DEBUG');
    }

    if (getEmailStrength($informations['email']) !== "strong") {
      $greatData = false;
      $GLOBALS['logManager']->log("Email invalide", 'DEBUG');
    }

    if($greatData) {
      greatValue($informations,$adresse);
      $GLOBALS['logManager']->log("Insertion de l'utilisateur bon",'INFO');
    }else {
      $GLOBALS['logManager']->log("Insertion de l'utilisateur echec",'ERROR');
    }
  }

  function getPasswordStrength($password) {
    $lengthRequirement = 8;
    $containsUppercase = preg_match('/[A-Z]/', $password);
    $containsLowercase = preg_match('/[a-z]/', $password);
    $containsDigits = preg_match('/[0-9]/', $password);
    $containsSpecialChars = preg_match('/[^a-zA-Z0-9]/', $password);

    if (strlen($password) < $lengthRequirement) {
      return "au moins 8 caractères";
    }

    $missingRequirements = array();
    if (!$containsUppercase) {
        $missingRequirements[] = "au moins une lettre majuscule";
    }

    if (!$containsLowercase) {
      $missingRequirements[] = "au moins une lettre minuscule";
    }

    if (!$containsDigits) {
      $missingRequirements[] = "au moins un chiffre";
    }

    if (!$containsSpecialChars) {
      $missingRequirements[] = "au moins un caractère spécial";
    }

    if (!empty($missingRequirements)) {
      return implode(", ", $missingRequirements);
    }

    return "strong";
  }

  function getAdminStrength($user) {

    $lengthRequirement = 1;

    if (strlen($user) < $lengthRequirement) {
      return "au moins 8 caractères";
    }
    
    $sql = "SELECT `nom` FROM `users` WHERE `nom` = '$user';";
    $existingUserStmt = $GLOBALS['database']->fetchAll($sql);
    
    if (count($existingUserStmt) > 0) {
      $missingRequirements[] = "Un utilisateur avec le même nom existe déjà.";
      $GLOBALS['logManager']->log("Un utilisateur avec le même nom existe déjà.",'DEBUG');
    }

    if (!empty($missingRequirements)) {
      return implode(", ", $missingRequirements);
    }

    return "strong";
  }

  function getEmailStrength($email) {

    $lengthRequirement = 1;

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $greatData = false;
      $GLOBALS['logManager']->log("L'adresse e-mail n'est pas valide.",'DEBUG');
      return "email invalide";
    } 
      
    $sql = "SELECT `email` FROM `users` WHERE `email` = '$email';";
    $existingEmailStmt = $GLOBALS['database']->fetchAll($sql);
    
    if (count($existingEmailStmt) > 0) {
      $GLOBALS['logManager']->log("Un utilisateur avec la même adresse existe déjà.",'DEBUG');
      $missingRequirements[] = "Un utilisateur avec la même adresse existe déjà.";
    }

    if (!empty($missingRequirements)) {
      return implode(", ", $missingRequirements);
    }

    return "strong";
  }



  function greatValue($informations,$adresse) {

    try {

      $nom = $informations['nom'];
      $prenom = $informations['prenom'];
      $email = $informations['email'];
      $age = $informations['age'];
      $role = $informations['role'];
      $password = $informations['password'];

      $n = $adresse['n°'];
      $rue = $adresse['rue'];
      $codePostal = $adresse['codePostal'];
      $ville = $adresse['ville'];

      $password_hash = password_hash($password, PASSWORD_DEFAULT);

      // Préparer la requête d'insertion
      $sql = "INSERT INTO `users`(`nom`, `prenom` ,`email`, `password`, `age`, `role`, `tentative`) 
              VALUES ('$nom', '$prenom' ,'$email','$password_hash', '$age', '$role' , '0')";

      $GLOBALS['database']->executeQuery($sql);
   
      $id_insert = $GLOBALS['database']->lastID();

      $sql = "INSERT INTO `adresse_bailleur`(`id_user`, `n°`, `rue`, `ville`, `codePostale`) 
              VALUES ('$id_insert','$n','$rue','$ville','$codePostal')";

      $GLOBALS['database']->executeQuery($sql);

      $GLOBALS['logManager']->log('Création du compte réussi ','INFO');
      echo '<script>window.location.href = redirect + "/?success=yes";</script>';

        
      }catch(PDOException $e) {
          $GLOBALS['logManager']->log($e->getMessage(),'ERROR');
          echo '<script>window.location.href = redirect + "/?page=sign-up&error=yes";</script>';

      }

  }


?>