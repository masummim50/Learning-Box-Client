import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebaseConfig";

const LogIn = () => {
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth();
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="h-[100vh] bg-slate-900 text-slate-300 flex items-center justify-center">
      <button
        className="px-6 py-2 bg-slate-300 text-slate-900 font-bold rounded-lg border border-slate-300 hover:bg-slate-900 hover:text-slate-300 hover:shadow-md hover:shadow-slate-300 transition-all"
        onClick={handleLogin}
      >
        Log In with Gmail
      </button>
    </div>
  );
};

export default LogIn;
