import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBx7GMsxMvjtM5u1HPXSTZlbsTaGwz888E",
	authDomain: "snapchat-clone-31a54.firebaseapp.com",
	projectId: "snapchat-clone-31a54",
	storageBucket: "snapchat-clone-31a54.appspot.com",
	messagingSenderId: "1091667269309",
	appId: "1:1091667269309:web:c80c1b1858e05e98c489d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
