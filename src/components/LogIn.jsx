import React, { useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { useGetPostsQuery } from "../features/post/postApi";
import { useLoginMutation } from "../features/user/userApi";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase/firebaseConfig";

const LogIn = () => {
  const navigate = useNavigate()
  const [login, {data, error, isSuccess}] = useLoginMutation();
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth();
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result._tokenResponse.idToken);
      const user = {
        name: result.user.displayName,
        email: result.user.email
      }
      login(user);
    });
  };

  useEffect(()=> {
    if(isSuccess) navigate("/")
  },[isSuccess])


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
