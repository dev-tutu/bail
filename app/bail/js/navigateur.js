// Vérifier si le navigateur est Chrome
if (navigator.userAgent.indexOf("Chrome") !== -1) {
  // Code spécifique à Chrome
  console.log("Ceci est Chrome.");
  document.body.style.zoom = 90 + "%";
}

// Vérifier si le navigateur est Firefox
if (navigator.userAgent.indexOf("Firefox") !== -1) {
  // Code spécifique à Firefox
  console.log("Ceci est Firefox.");
  document.body.style.zoom = 90 + "%";
}

// Vérifier si le navigateur est Edge (ancienne version basée sur EdgeHTML)
if (navigator.userAgent.indexOf("Edge") !== -1) {
  // Code spécifique à Edge
  console.log("Ceci est Edge (ancienne version).");
}

// Vérifier si le navigateur est Edge (nouvelle version basée sur Chromium)
if (navigator.userAgent.indexOf("Edg") !== -1) {
  // Code spécifique à Edge (nouvelle version)
  console.log("Ceci est Edge (nouvelle version).");
}

// Vérifier si le navigateur est Internet Explorer
if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
  // Code spécifique à Internet Explorer
  console.log("Ceci est Internet Explorer.");
}
