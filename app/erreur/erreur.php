
<?php
exit;

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erreur technique</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f5f5f5;
        }
        .error-container {
            margin: 10% auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            max-width: 400px;
        }
        h1 {
            color: #e74c3c;
        }
        p {
            color: #333;
        }
        .back-button {
            margin-top: 20px;
        }

        .back-button {
    margin-top: 20px;
    background-color: #3498db; /* Couleur de fond */
    color: #fff; /* Couleur du texte */
    padding: 10px 20px; /* Espacement à l'intérieur du bouton */
    border: none; /* Pas de bordure */
    border-radius: 5px; /* Coins arrondis */
    cursor: pointer; /* Curseur de la souris en forme de main */
    transition: background-color 0.3s ease; /* Animation de transition */
}

.back-button:hover {
    background-color: #2980b9; /* Couleur de fond au survol */
}
    </style>
</head>
<body>
    <div class="error-container">
        <h1>Erreur technique</h1>
        <p>Il semble y avoir un problème technique avec le site. Nous nous excusons pour la gêne occasionnée.</p>
        <p>Veuillez réessayer ultérieurement.</p>
        <button class="back-button" onclick="history.go(-1);">Retour</button>
    </div>
</body>
</html>
