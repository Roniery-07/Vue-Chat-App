
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlprJ0j9LTbgX4sl30hKbJ_I8MV-8pRTg",
  authDomain: "vue-chat-app-99b8f.firebaseapp.com",
  projectId: "vue-chat-app-99b8f",
  storageBucket: "vue-chat-app-99b8f.appspot.com",
  messagingSenderId: "13226477951",
  appId: "1:13226477951:web:77d3892bb9d7d4432e324a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db
