import _ from 'lodash';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDST8he552JDIV0_R1Cm_G74cphtdS4v0A",
  authDomain: "big-data-2531d.firebaseapp.com",
  projectId: "big-data-2531d",
  storageBucket: "big-data-2531d.appspot.com",
  messagingSenderId: "177758781418",
  appId: "1:177758781418:web:2165518270f23545a63c93",
  measurementId: "G-TVPTMEXTGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function component() {
    const element = document.createElement('div');
  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());