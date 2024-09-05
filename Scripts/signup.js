import { auth } from '../firebase/firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";


const firebaseConfig = {

    apiKey: "AIzaSyDDcwT-HVi2Zu1xfH6s3JYeroefBkZab2g",
  
    authDomain: "to-do-e348c.firebaseapp.com",
  
    projectId: "to-do-e348c",
  
    storageBucket: "to-do-e348c.appspot.com",
  
    messagingSenderId: "450846240493",
  
    appId: "1:450846240493:web:df91a84735a13800bb66e4",
  
    measurementId: "G-073DF2R8PP"
  
  };







document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Sign up successful!');
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('signup-error').textContent = errorMessage;
        });
});
