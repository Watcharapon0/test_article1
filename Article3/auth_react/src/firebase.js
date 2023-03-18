import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDP-4tElOro7Dnv65LCS5R_4UDif3o2Jgg",
  authDomain: "auth-art-f6906.firebaseapp.com",
  projectId: "auth-art-f6906",
  storageBucket: "auth-art-f6906.appspot.com",
  messagingSenderId: "216644417556",
  appId: "1:216644417556:web:d7fb4dfcba02d947860f01"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app);

export { app, auth, storage };
