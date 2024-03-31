function showAlert(message) {

    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('custom-alert-message');
    const alertOkButton = document.getElementById('custom-alert-ok');
  
    alertMessage.textContent = message;
  
    customAlert.style.display = 'block';
  
    // Gérer le clic sur le bouton OK
    alertOkButton.addEventListener('click', hideAlert);
}
  
function hideAlert() {
    var nouvelle_url = redirect + "/";
    window.location.href = nouvelle_url;
}