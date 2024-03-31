    // Obtenir la référence aux éléments HTML
    var modal = document.getElementById('myModal');
    var span = document.getElementById('closeModal');

    var countdownValue = 5; // Durée en secondes du délai pour fermer la fenêtre
    var countdownInterval;

    // Fonction pour ouvrir la fenêtre modale
    function openModal() {
        modal.style.display = 'block';
        startCountdown();
    }



    // Fonction pour fermer la fenêtre modale
    function closeModal() {
        modal.style.display = 'none';
    }


    span.addEventListener("click", function()
    {
        closeModal();
    });


    // Fermer la fenêtre modale lorsque l'utilisateur clique en dehors de la fenêtre modale
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
            window.location.href = redirect + '/';
        }
    }

    var url = new URL(window.location.href);

    // Obtenir les paramètres de l'URL
    var params = new URLSearchParams(url.search);

    if (params.has('confirme') && params.get('confirme') == 'yes') {
        openModal();
    } 

    if (params.has('password') && params.get('password') == 'yes') {
        openModal();
    } 

    // Vérifier si le paramètre "param1" est présent
    if (params.has('success') && params.get('success') == 'yes') {
      openModal();
    } 

    if (params.has('reset-confirme') && params.get('reset-confirme') == 'yes') {
        openModal();
    } 


    function startCountdown() {
    countdownInterval = setInterval(function () {
        var countdownElement = document.getElementById('countdownValue');
        countdownElement.textContent = countdownValue;
        countdownValue--;

        if (countdownValue < 0) {
            clearInterval(countdownInterval);
            closeAndResetModal();
            window.location.href = redirect + "/";
        }
    }, 1000); // Mettre à jour chaque seconde (1000 millisecondes)
}

function closeAndResetModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Réinitialiser la valeur du compte à rebours
    countdownValue = 5;

    // Réinitialiser l'affichage du compte à rebours
    document.getElementById('countdownValue').textContent = countdownValue;
    window.location.href = redirect + "/";

}