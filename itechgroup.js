const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault() // Empêche le rechargement de la page

    const data = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        filiere: document.getElementById("filiere").value,
        niveau: document.getElementById("niveau").value,
        motivation: document.getElementById("motivation").value
    }

    // TEST : afficher les données dans un pop-up
    alert("Voici ce qui serait envoyé au serveur :\n" + JSON.stringify(data, null, 2))

    // Quand tu auras un backend, tu remplaceras alert() par fetch :
    /*
    fetch("https://ton-backend-production.up.railway.app/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => alert("Inscription envoyée avec succès"))
    .catch(err => alert("Erreur lors de l'envoi"))
    */
})