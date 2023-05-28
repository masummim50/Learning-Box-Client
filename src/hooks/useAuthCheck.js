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
            const expirationTimestamp = auth.exp;
            const currentTimestamp = Math.floor(Date.now() / 1000); // Get the current timestamp in seconds

            if (expirationTimestamp < currentTimestamp) {
            // Token has expired
            console.log('Token has expired');
            } else {
                console.log('Token is still valid');
                if( auth){
                    dispatch(setUser({user:auth, accessToken:token}))
                }
            }

        }
        setAuthChecked(true)
    },[dispatch])
    return authChecked;
}