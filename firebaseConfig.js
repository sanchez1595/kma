import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9H78AoJReZW1qu_c4xYLHHyNAd5l25Tc",
  authDomain: "platform-k-m-a-2846wk.firebaseapp.com",
  projectId: "platform-k-m-a-2846wk",
  storageBucket: "platform-k-m-a-2846wk.appspot.com",
  messagingSenderId: "576439774886",
  appId: "1:576439774886:web:494e39a00141cc9c26ce67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;