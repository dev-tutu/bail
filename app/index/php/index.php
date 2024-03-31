<?php



    // Inclusion des fichiers
    if (file_exists('./assets/php/include.php')) {

      

        include './assets/php/include.php';

        $filesToInclude = [
            "./assets/php/log.php",
            "./assets/php/bdd.php",
            "./assets/conf/web.php",
            "./assets/conf/global.php",
            "./assets/php/mail.php"
        ];

        $errors = [];

        try {
            foreach ($filesToInclude as $file) {

                try {
                    FileIncluder::includeFile($file);
                } catch (Exception $e) {
                    $errors[] = 'Error including ' . $file . ': ' . $e->getMessage();
                }
            }

            if (empty($errors)) {

                $GLOBALS['redirect'] = WEB_REDIRECT;
                echo "<script>redirect = '$redirect';</script>";

                $GLOBALS['logManager'] = new LogManager('./log/');
                $GLOBALS['database'] = new Database(DB_HOST, DB_PORT, DB_NAME,DB_USER,DB_PASS);
                $GLOBALS['database']->connect();
                
            } else {
                foreach ($errors as $error) {
                    echo $error . '<br>';
                }
            }
        } catch (Exception $e) {
            echo 'Error: ' . $e->getMessage();
        }

    } else {
        die('Error: include.php not found.');
    }

    // Inclusion de pages selon les conditions
    $pageIncludes = [
        "sign-up" => './app/sign-up/sign-up.php',
        "menu" => './app/menu/menu.php',
        "navbar" => './app/menu/navbar.php',
        "logement" => './app/logement/appartement.php',
        "bail" => './app/bail/index.php'
    ];

    if (!isset($_SESSION['user_id']) && !isset($_SESSION['email_login'])) {

        if(isset($_GET['page']) and $_GET['page'] == 'sign-up') {
            $file = "./app/sign-up/inscription.php";
        }else if(isset($_GET['page']) and $_GET['page'] == 'reset-account'){
            $file = "./app/sign-reset/reset.php";
        }else if(isset($_GET['page']) and $_GET['page'] == 'reset_password_confirm'){
            $file = "./app/sign-reset/reset_password_confirm.php";
        }else if(isset($_GET['page']) and $_GET['page'] == 'error'){
            $file = "./app/erreur/erreur.php";
        }else {
            $file = "./app/sign-in/connexion.php";
        }

        try {
            FileIncluder::includeFile($file);
        } catch (Exception $e) {
            $errors = 'Error including ' . $file . ': ' . $e->getMessage();
            
        }

        

    } else {
        

        echo '<body class="g-sidenav-show   bg-gray-100">';
        echo '<div class="min-height-300 bg-primary position-absolute w-100"></div>';
        include $pageIncludes['menu'];
        include $pageIncludes['navbar'];

        if(isset($_GET['page']) && array_key_exists($_GET['page'], $pageIncludes)) {

            echo '<main class="main-content position-relative border-radius-lg ">';
                include $pageIncludes[$_GET['page']];
            echo '</main>';
        }

        echo '</body>';
    
        
    }


   
    // Gestion des cookies et des sessions
    if (isset($_COOKIE['username'])) {
        $GLOBALS['username'] = $_COOKIE['username'];
    }

    if (isset($_SESSION['user_id'])) {
        $GLOBALS['id_user'] = $_SESSION['user_id'];
    }
?>