<?php

    function resetPassword() {

        $email = htmlspecialchars($_POST['email']);
        
        $sql = "SELECT id FROM `users` WHERE `email` = '$email'; ";
        $user = $GLOBALS['database']->fetchAll($sql);

        if ($user) {

            //id user
            $id = $user[0]['id'];
                
            // Générer un jeton de réinitialisation unique (à stocker en base de données)
            $resetToken = bin2hex(random_bytes(32));
                
            // Enregistrer le jeton de réinitialisation dans la base de données avec la date d'expiration
            $expiryTime = date('Y-m-d H:i:s', strtotime('+1 hour'));

            $sql = "INSERT INTO reset_tokens (`user_id`, `token`, `expires_at`) VALUES ('$id', '$resetToken', '$expiryTime')";
            $GLOBALS['database']->executeQuery($sql);
            
            $mail = new Mailer();
            
            $redirect = $GLOBALS['redirect'];
            $resetLink = $redirect . "/?page=reset_password_confirm&token=$resetToken";
            $mail->sendToken($email,$resetLink);

            // Redirigez l'utilisateur vers une page de confirmation
            $message = "Un lien de validation a été envoyé pour réinitialiser votre mot de passe.";
            echo "<script>showAlert('$message');</script>";
                
            echo '<script>window.location.href = redirect + "/?reset=yes";</script>';
            //exit();

        } else {
            return "Adresse e-mail non trouvée.";
        }
    }

?>