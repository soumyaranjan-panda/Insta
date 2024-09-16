import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, getStream } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAw9R1F9XayjHQWor0lDXeMsnZlt-iJrKw",
  authDomain: "insta-clone-8f660.firebaseapp.com",
  projectId: "insta-clone-8f660",
  storageBucket: "insta-clone-8f660.appspot.com",
  messagingSenderId: "245092927970",
  appId: "1:245092927970:web:cb233c8b021e6767d491bb",
  measurementId: "G-HCDBGC39SE"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};