// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnkhwlur2BgzAyK9Hu7FQWCDayYSYMqTA",
  authDomain: "learning-box-3eb2c.firebaseapp.com",
  projectId: "learning-box-3eb2c",
  storageBucket: "learning-box-3eb2c.appspot.com",
  messagingSenderId: "389073342949",
  appId: "1:389073342949:web:7e4af88adbec41a2b99f0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;