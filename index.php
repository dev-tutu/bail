<!DOCTYPE html>
<html lang="fr">

  <head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>RenteIAssistance</title>

    <!--  Fonts and icons  -->
    <link href="./assets/css/index/style.css" rel="stylesheet" />

    <!-- Nucleo Icons -->
    <link href="./assets/css/nucleon/nucleo-icons.css" rel="stylesheet" />
    <link href="./assets/css/nucleon/nucleo-svg.css" rel="stylesheet" />


    <!-- CSS Files -->
    <link href="./assets/css/nucleon/argon-dashboard.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">


  
    <!-- LIB Files -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>


  </head>


<?php


  $GLOBALS['user_id'] = "";
  $GLOBALS['username'] = "";
  $GLOBALS['redirect'] = "";

  session_start();
  

  if (file_exists('./app/index/php/index.php')) {
    include './app/index/php/index.php';
    
  }else {
    die('Error: fichier init not found.');
  }

?>