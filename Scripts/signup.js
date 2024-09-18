
import { auth } from '../firebase/firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";



  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  //  Prevent form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // If successful, userCredential contains the user object
            const user = userCredential.user;
            alert('Sign up successful!');
            window.location.href = 'index.html'; // Redirect to another page after success
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('signup-error').textContent = errorMessage;
        });
});
