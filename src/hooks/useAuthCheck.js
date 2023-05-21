import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

export default function useAuthCheck(){
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);
    useEffect(()=> {
        const token = localStorage.getItem('learningBox-accessToken');
        if(token){
            const auth = JSON.parse(atob(token.split(".")[1]));
            console.log('auth at first', auth)
            if( auth){
                dispatch(setUser({user:auth, accessToken:token}))
            }
        }
        setAuthChecked(true)
    },[dispatch])
    return authChecked;
}