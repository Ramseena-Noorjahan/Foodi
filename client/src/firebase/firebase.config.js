// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq6xssup9CbLzVM08-yLt1p0BjWtXUGxQ",
  authDomain: "fir-foodi-client-6ee01.firebaseapp.com",
  projectId: "fir-foodi-client-6ee01",
  storageBucket: "fir-foodi-client-6ee01.appspot.com",
  messagingSenderId: "761890947138",
  appId: "1:761890947138:web:c1996605df4ef073bc2ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app