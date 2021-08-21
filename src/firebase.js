import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBomzfhDLjL0koShwnpEgHPnosYHodr-dE",
    authDomain: "linkedin-clone-e1ee6.firebaseapp.com",
    projectId: "linkedin-clone-e1ee6",
    storageBucket: "linkedin-clone-e1ee6.appspot.com",
    messagingSenderId: "505373903790",
    appId: "1:505373903790:web:7eabc18c8b8cde2a9a563f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };