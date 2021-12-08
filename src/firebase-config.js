import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6jZ373hf6z0G7AZGrs27bel5BYtL3nzI",
  authDomain: "authentication-tutorial-ded4a.firebaseapp.com",
  projectId: "authentication-tutorial-ded4a",
  storageBucket: "authentication-tutorial-ded4a.appspot.com",
  messagingSenderId: "504002458296",
  appId: "1:504002458296:web:1b0259398e35f48b4fba4d",
  measurementId: "${config.measurementId}",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
