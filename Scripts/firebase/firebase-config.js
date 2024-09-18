import { auth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";





const firebaseConfig = {

    apiKey: "AIzaSyDDcwT-HVi2Zu1xfH6s3JYeroefBkZab2g",
  
    authDomain: "to-do-e348c.firebaseapp.com",
  
    projectId: "to-do-e348c",
  
    storageBucket: "to-do-e348c.appspot.com",
  
    messagingSenderId: "450846240493",
  
    appId: "1:450846240493:web:df91a84735a13800bb66e4",
  
    measurementId: "G-073DF2R8PP"
  
  };




const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };



