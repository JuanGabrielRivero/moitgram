import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY || "API_KEY_VACIA",
  authDomain: process.env.AUTH_DOMAIN || "AUTH_DOMAIN_VACIO",
  projectId: process.env.PROJECT_ID || "PROJECT_ID_VACIO"
};

const app = initializeApp(firebaseConfig);
