import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAF2KctmaAi3mK1utiRHw8wb5iXMH3Gw7I",
  authDomain: "chat-application-8fcf2.firebaseapp.com",
  databaseURL: "https://chat-application-8fcf2.firebaseio.com",
  projectId: "chat-application-8fcf2",
  storageBucket: "chat-application-8fcf2.appspot.com",
  messagingSenderId: "340819957872",
  appId: "1:340819957872:web:4a7412b961a9c19f4c3cb5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

const three = "3";
