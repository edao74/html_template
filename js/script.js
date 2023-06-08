function askName() {
  let username = prompt("quel est votre prenom?");
  let message = "👋 Bonjour " + username;
  document.body.innerHTML += "<h2>" + message + "</h2>";
}

function askBirthYear() {
  let birthYear = prompt("Votre année de naissance");
  let birthMonth = prompt("Votre mois de naissance");
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth) {
    age--;
  }

  let message2 = "Vous avez " + age + " ans.";
  document.body.innerHTML += "<h3>" + message2 + "</h3>";
}

askName();
askBirthYear();
