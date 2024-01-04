import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAGzKfz7PLRSPDwqbq7ghHKE6c6-kKlj-M",
  authDomain: "we-love-bird.firebaseapp.com",
  projectId: "we-love-bird",
  storageBucket: "we-love-bird.appspot.com",
  messagingSenderId: "10625894458",
  appId: "1:10625894458:web:c43449b2ad94603d1ecd03",
  measurementId: "G-9RZBSMCDCW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);





