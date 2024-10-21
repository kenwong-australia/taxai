// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtNB9C_6ELltpSHxVtVb1IQc_VbT7BSas",
  authDomain: "taxai-58105.firebaseapp.com",
  projectId: "taxai-58105",
  storageBucket: "taxai-58105.appspot.com",
  messagingSenderId: "209092136319",
  appId: "1:209092136319:web:c223cf8662fbbc801ede4a",
  measurementId: "G-7NLYW7WGEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);