       // Code JavaScript pour gérer le bouton "Se souvenir de moi", le nom d'utilisateur et le mot de passe
       const rememberMeCheckbox = document.getElementById('rememberMe');
       const form = document.getElementById('form');
       const usernameInput = document.getElementById('email_login');
       const passwordInput = document.getElementById('password');

       // Vérifie si les cookies "rememberMe", "savedUsername" et "savedPassword" existent
       const rememberMeCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('rememberMe='));
       const savedUsernameCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('savedUsername='));
       const savedPasswordCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('savedPassword='));

       if (rememberMeCookie) {
           rememberMeCheckbox.checked = true;
       }

       if (savedUsernameCookie) {
           // Si "savedUsername" existe, remplissez automatiquement le champ de nom d'utilisateur
           const savedUsername = savedUsernameCookie.split('=')[1];
           usernameInput.value = savedUsername;
       }

       if (savedPasswordCookie) {
           // Si "savedPassword" existe, remplissez automatiquement le champ de mot de passe
           const savedPassword = savedPasswordCookie.split('=')[1];
           passwordInput.value = savedPassword;
       }

       // Écouteur d'événement pour le soumission du formulaire
       form.addEventListener('submit', function (event) {
           if (rememberMeCheckbox.checked) {
               // Crée un cookie "rememberMe" qui expire dans 30 jours
               const date = new Date();
               date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
               const expires = "expires=" + date.toUTCString();
               document.cookie = "rememberMe=true; " + expires + "; path=/";
               
               // Crée un cookie "savedUsername" pour stocker le nom d'utilisateur en texte brut
               const usernameValue = usernameInput.value;
               document.cookie = "savedUsername=" + usernameValue + "; " + expires + "; path=/";

               // Crée un cookie "savedPassword" pour stocker le mot de passe en texte brut
               const passwordValue = passwordInput.value;
               document.cookie = "savedPassword=" + passwordValue + "; " + expires + "; path=/";
           } else {
               // Supprime les cookies "rememberMe", "savedUsername" et "savedPassword" s'ils existent
               document.cookie = "rememberMe=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
               document.cookie = "savedUsername=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
               document.cookie = "savedPassword=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
           }
       });