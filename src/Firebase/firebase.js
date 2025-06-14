import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAh6BrwF5968KzQ3TA1b8FqBg2At3gvu8",
  authDomain: "pc-shop-fd514.firebaseapp.com",
  databaseURL: "https://pc-shop-fd514-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pc-shop-fd514",
  storageBucket: "pc-shop-fd514.firebasestorage.app",
  messagingSenderId: "953834423145",
  appId: "1:953834423145:web:c7eba647000cfcc3d1f3f8",
  measurementId: "G-SRTHVHHVES"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };