function checkPasswordStrength() {
    var password = document.getElementById("new_password").value;
    var passwordStrength = document.getElementById("password-strength");

    // Vérifier la longueur du mot de passe
    if (password.length < 8) {
        passwordStrength.innerHTML = "La longueur minimale du mot de passe est de 8 caractères.";
        passwordStrength.style.color = "red";
        return;
    }

    // Vérifier la présence de majuscules, minuscules, chiffres et caractères spéciaux
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasDigit = /[0-9]/.test(password);
    var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
        passwordStrength.innerHTML = "Mot de passe fort.";
        passwordStrength.style.color = "green";
    } else {
        passwordStrength.innerHTML = "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";
        passwordStrength.style.color = "red";
    }
}