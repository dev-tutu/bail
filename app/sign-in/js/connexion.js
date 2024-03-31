var createAccountButton = document.getElementById("createAccountBtn");
createAccountButton.addEventListener("click", function() {
    window.location.href = redirect + "/?page=sign-up";
});

var resetAccountButton = document.getElementById("resetAccountBtn");
resetAccountButton.addEventListener("click", function() {
    window.location.href = redirect + "/?page=reset-account";
});