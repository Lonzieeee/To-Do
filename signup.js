// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"; 
// import { signInWithEmailAndPassword } from "firebase/auth/web-extension";





const firebaseConfig = {
  apiKey: "AIzaSyDDcwT-HVi2Zu1xfH6s3JYeroefBkZab2g",
  authDomain: "to-do-e348c.firebaseapp.com",
  projectId: "to-do-e348c",
  storageBucket: "to-do-e348c.appspot.com",
  messagingSenderId: "450846240493",
  appId: "1:450846240493:web:df91a84735a13800bb66e4",
  measurementId: "G-073DF2R8PP",
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log("Firebase Initialized Successfully");





window.handleSignin = function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Sign up successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Error handling
      console.error("Firebase Sign Up Error: ", error);
      const errorMessage = error.message;
      document.getElementById("signup-error").textContent = errorMessage;
    });
}




