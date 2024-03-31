<?php



  function connexion() {

  
    $email = htmlspecialchars($_POST["email_login"]);
    $password = htmlspecialchars($_POST["password"]);

  
    try {
      $result = null;
      $sql = "SELECT * FROM users WHERE email = '$email'; ";
      $result = $GLOBALS['database']->fetchSingle($sql);
    }catch(PDOException $e) {
      $GLOBALS['logManager']->log($e->getMessage(),'ERROR');
    
    }
        
    if ($result != null && count($result) >= 1) {

      

      if(password_verify($password, $result['password'])) {

        $GLOBALS['logManager']->log("Compte de l'utilisateur $email activer",'WARNING');

        $_SESSION['user_id'] = $result['id'];
        $_SESSION['email_login'] = $result['email'];

        
        echo "<script>window.location.href = redirect</script>";

      } else {

        

        $tentative = $result['tentative'] + 1;
        $id = $result['id'];

        if($tentative <= 3) {
          $sql = "UPDATE users SET tentative = $tentative WHERE $id";
        }else {
          $token = bin2hex(random_bytes(32)); // Génère un token de 128 caractères hexadécimaux
          $sql = "UPDATE users SET tentative = 0 , `password` = '$token' WHERE $id";
        }         
              
        $GLOBALS['database']->executeQuery($sql);
        $GLOBALS['logManager']->log("Nom d'utilisateur ou mot de passe incorrect",'WARNING');
        echo '<script>window.location.href = redirect + "/?page=sign-in&password=yes";</script>';
      }     

    } else {

    
      $GLOBALS['logManager']->log("Nom d'utilisateur ou mot de passe incorrect",'WARNING');
      echo '<script>window.location.href =  redirect + "/?page=sign-in&password=yes";</script>';
    }
  }

?>


