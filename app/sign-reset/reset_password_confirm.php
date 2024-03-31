<link href="./app/sign-reset/css/reset-confirme.css" rel="stylesheet"/>



<?php


// Vérifier si un jeton de réinitialisation est présent dans l'URL
if (isset($_GET['token'])) {

    $resetToken = $_GET['token'];


    $sql = "SELECT * FROM reset_tokens WHERE token = '$resetToken'";
    $tokenData = $GLOBALS['database']->fetchSingle($sql);

      
    if ($tokenData) {
        // Vérifier si le jeton de réinitialisation est encore valide
        $currentTime = date('Y-m-d H:i:s');
        if ($tokenData['expires_at'] >= $currentTime) {
            // Afficher un formulaire pour réinitialiser le mot de passe
            echo '
            <!DOCTYPE html>
            <html>
            <head>
                <title>Réinitialisation de mot de passe</title>
            </head>
            <body>
                <h2>Réinitialisation de mot de passe</h2>
                <form action="" method="post">
                    <input type="hidden" name="token" value="' . $resetToken . '">
                    <label for="new_password">Nouveau mot de passe :</label>
        <input type="password" name="new_password" id="new_password" required onkeyup="checkPasswordStrength()">
        <div id="password-strength"></div>
        <label for="confirm_password">Confirmer le mot de passe :</label>
        <input type="password" name="confirm_password" required>
        <input type="submit" value="Réinitialiser le mot de passe">
                </form>
                
            </body>
            </html>';
        } else {
            echo '<div class="error-message">Le jeton de réinitialisation a expiré. Veuillez en demander un nouveau.</div>';
            $GLOBALS['logManager']->log("Le jeton de réinitialisation a expiré. Veuillez en demander un nouveau.",'ERROR');
        }
    } else {
        echo '<div class="error-message">Jeton de réinitialisation invalide.</div>';
        $GLOBALS['logManager']->log("Jeton de réinitialisation invalide.",'ERROR');
    }
    
} else {
    echo '<div class="error-message">Jeton de réinitialisation manquant dans l\'URL.</div>';
    $GLOBALS['logManager']->log("Jeton de réinitialisation manquant dans l'URL.",'ERROR');
}



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer le jeton de réinitialisation et le nouveau mot de passe depuis le formulaire
    $resetToken = $_POST['token'];
    $newPassword = $_POST['new_password'];
    $confirmPassword = $_POST['confirm_password'];

    // Valider que les champs ne sont pas vides et que le mot de passe correspond à la confirmation
    if (empty($newPassword) || empty($confirmPassword) || $newPassword !== $confirmPassword) {
        echo '<div class="error-message">Les champs du mot de passe ne correspondent pas.</div>';
        $GLOBALS['logManager']->log("Les champs du mot de passe ne correspondent pas.",'ERROR');
        
        exit();
    }

    // Vérifier si le jeton de réinitialisation existe dans la base de données
    $sql = "SELECT * FROM reset_tokens WHERE token = '$resetToken'";
    $tokenData = $GLOBALS['database']->fetchSingle($sql);

    if ($tokenData) {
        // Vérifier si le jeton de réinitialisation est encore valide
        $currentTime = date('Y-m-d H:i:s');
        if ($tokenData['expires_at'] >= $currentTime) {
            // Réinitialiser le mot de passe de l'utilisateur avec le nouveau mot de passe
            $userId = $tokenData['user_id'];

            // Hasher le nouveau mot de passe (vous devrez utiliser la méthode de hachage appropriée, par exemple, password_hash())
            $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

            // Mettre à jour le mot de passe dans la base de données pour l'utilisateur concerné
            $sql = "UPDATE users SET password = '$hashedPassword' WHERE id = $userId";
            $GLOBALS['database']->executeQuery($sql);

            // Supprimer le jeton de réinitialisation utilisé de la base de données
            $sql = "DELETE FROM reset_tokens WHERE token = '$resetToken'";
            $GLOBALS['database']->executeQuery($sql);

            echo '<div class="success-message">Le mot de passe a été réinitialisé avec succès.</div>';
            $GLOBALS['logManager']->log("Le mot de passe a été réinitialisé avec succès.",'INFO');

            echo '<script>window.location.href = redirect + "/?reset-confirme=yes";</script>';
        } else {
            echo '<div class="error-message">Le jeton de réinitialisation a expiré. Veuillez en demander un nouveau.</div>';
            $GLOBALS['logManager']->log("Le jeton de réinitialisation a expiré. Veuillez en demander un nouveau.",'ERROR');
        }
    } else {
        echo '<div class="error-message">Jeton de réinitialisation invalide.</div>';
        $GLOBALS['logManager']->log("Jeton de réinitialisation invalide.",'ERROR');
    }
}


?>

<script src="./app/sign-reset/js/confirme-reset.js"></script>