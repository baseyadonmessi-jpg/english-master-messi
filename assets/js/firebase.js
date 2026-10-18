import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqNVBasgrOvDRF3LcVvUVPuwRGBekucSw",
  authDomain: "english-master-messi.firebaseapp.com",
  projectId: "english-master-messi",
  storageBucket: "english-master-messi.firebasestorage.app",
  messagingSenderId: "248506996518",
  appId: "1:248506996518:web:485918e1d44e212544d3e7",
  measurementId: "G-F5MM01E0QF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
