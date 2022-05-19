import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmtjotadHjP97mtOU0TuzHPND-uciztQI",
  authDomain: "chat-f5704.firebaseapp.com",
  databaseURL: "https://chat-f5704-default-rtdb.firebaseio.com",
  projectId: "chat-f5704",
  storageBucket: "chat-f5704.appspot.com",
  messagingSenderId: "647110579709",
  appId: "1:647110579709:web:a13383062c95803c26f594"
};

const App = initializeApp(firebaseConfig);
const db = getFirestore();
const button = document.getElementById("btn");
button.addEventListener("click", async() => {
  console.log("Funciona");
  const Name = document.querySelector(".input-email").value;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: Name
    });
    window.location.href = "./chat.html";
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
