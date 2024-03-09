// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyANCesmETMd-0Y2RIcXHvDAXCQGvXFDsIw',
  authDomain: 'expense-tracker-d6fd0.firebaseapp.com',
  projectId: 'expense-tracker-d6fd0',
  storageBucket: 'expense-tracker-d6fd0.appspot.com',
  messagingSenderId: '385424181293',
  appId: '1:385424181293:web:5d86b634f4d04217d250a4',
  measurementId: 'G-LCR52E2YS7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
