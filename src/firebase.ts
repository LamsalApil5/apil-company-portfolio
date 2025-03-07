// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5cP2lMAZoR-WKtp-c3KbS5zf8Dtv3Fbc",
  authDomain: "information-collect-1.firebaseapp.com",
  databaseURL: "https://information-collect-1-default-rtdb.firebaseio.com",
  projectId: "information-collect-1",
  storageBucket: "information-collect-1.firebasestorage.app",
  messagingSenderId: "1020294717168",
  appId: "1:1020294717168:web:3179e8175699777a886c35",
  measurementId: "G-MZVFTYZV1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
