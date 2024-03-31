document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const strengthElement = document.getElementById('password-strength');
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/;

    passwordInput.addEventListener('input', function () {
      const password = this.value;
      const minLength = 8;

      if (password.length >= minLength && strongRegex.test(password)) {
        // Le mot de passe est valide en termes de longueur et de force
        this.setCustomValidity(''); // Réinitialise la validation personnalisée
        strengthElement.innerText = 'Mot de passe fort';
        strengthElement.classList.remove('text-danger');
        strengthElement.classList.add('text-success');
      } else {
        // Le mot de passe ne répond pas aux critères
        this.setCustomValidity('Le mot de passe doit contenir au moins 8 caractères, y compris des lettres majuscules, des lettres minuscules, des chiffres et des caractères spéciaux.');
        strengthElement.innerText = '';
        strengthElement.classList.remove('text-success');
        strengthElement.classList.add('text-danger');
      }
    });
});