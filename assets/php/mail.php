<?php

    require_once './assets/lib/PHPMailer/src/PHPMailer.php';
    require_once './assets/lib/PHPMailer/src/Exception.php';
    require_once './assets/lib/PHPMailer/src/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    

    class Mailer {

        protected $mailer;

        public function __construct() {

            require_once './assets/conf/smtp.php'; // Inclure le fichier smtp.php

            $this->mailer = new PHPMailer(true);
            // Paramètres de configuration SMTP
            $this->mailer->isSMTP();
            $this->mailer->Host = SMTP_HOST;
            $this->mailer->SMTPAuth = true;
            $this->mailer->Username = SMTP_USERNAME;
            $this->mailer->Password = SMTP_PASSWORD;
            $this->mailer->SMTPSecure = SMTP_SECURE;
            $this->mailer->Port = SMTP_PORT;
            
        }

        public function sendToken($email,$token) {

            try {
                // Paramètres de l'e-mail
                $this->mailer->setFrom($this->mailer->Username);
                $this->mailer->addAddress($email);
                $this->mailer->Subject = 'Activation Code';
                $this->mailer->Body = $token;
        
                // Envoyer l'e-mail
                $this->mailer->send();
                return true;
            } catch (Exception $e) {
                // Gérer les erreurs d'envoi d'e-mail
                echo 'Erreur lors de l\'envoi de l\'e-mail: ' . $this->mailer->ErrorInfo;
                return false;
            }

        }
    }

?>