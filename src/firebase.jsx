import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3q-gAQwsAt7tI6OXvj71Q-UCdWgq7xlk",
  authDomain: "mtgcardstore-c5dce.firebaseapp.com",
  projectId: "mtgcardstore-c5dce",
  storageBucket: "mtgcardstore-c5dce.firebasestorage.app",
  messagingSenderId: "336158646660",
  appId: "1:336158646660:web:58dfe8e9efa7f3a9573dd1",
  measurementId: "G-80E5MQ3L2Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export the Firestore database
