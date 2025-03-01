
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAmhvxqddjJHwR-QhtLGxIm7edX4e5VcKg",
  authDomain: "netflix-clone-c288a.firebaseapp.com",
  projectId: "netflix-clone-c288a",
  storageBucket: "netflix-clone-c288a.firebasestorage.app",
  messagingSenderId: "1080317526851",
  appId: "1:1080317526851:web:223c4b73476e2ae58a25f6",
  measurementId: "G-4JSDSHX7RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}


const login = async(email,password)=>{
    // login functionality
try {
   await signInWithEmailAndPassword(auth,email,password);
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));

}
}


const logout=()=>{
    signOut(auth);
}


export {auth, db, login, signup,logout};