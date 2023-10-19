// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnhM6t1-ARZVqTkgVYen4vyTh2_88GPrU",
  authDomain: "tech-zone-with-mongodb.firebaseapp.com",
  projectId: "tech-zone-with-mongodb",
  storageBucket: "tech-zone-with-mongodb.appspot.com",
  messagingSenderId: "510269338618",
  appId: "1:510269338618:web:10779abea8dfd036ccea43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;