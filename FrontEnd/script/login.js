const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('pw');


// Ne JAMAIS faire confiance au front, donc vérifier le type email avec un regex, et vérifier le password pour le projet juste vérifier que le champs n'est pas vide


form.addEventListener('submit', event => {
    event.preventDefault()

    const object = {
        email: email.value,
        password: password.value
    }

    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(object)
    }).then(response => {
        if (response.ok) {
            return response.json();
        }else{
            alert('Erreur de connexion mot de passe ou email incorrect');
        }
    }).then(data => {
        // Sauvegarder le token
        localStorage.setItem('token', data.token);
        window.location.href = './index.html';
    }).catch(err => {
        console.error('Error:', err);
    });

})
