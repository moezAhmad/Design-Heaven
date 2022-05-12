import { useState, useEffect , useRef } from "react";
import { projectAuth } from "../Firebase/firebase-config";
import { useAuthContext } from "./useAuthContext"
import { useNavigate  } from "react-router-dom";
import socialMediaAuth from '../layouts/Accounts/socialAuthentication'


export const useLogin = () => {

    const [isCancelled, setisCancelled ] = useState(false)
    const [error ,setError] = useState(null)
    const [isPending ,setisPending] = useState(false)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate();


    const login = async (email,password, provider ) => {
        setError(null)
        setisPending(true)

        //Sign the user out
        try {

            if(email==null && password== null){

                const res = await socialMediaAuth(provider)
                dispatch({ type : 'LOGIN', payload : res})      

            }

            if(provider == null){
                const res = await projectAuth.signInWithEmailAndPassword(email,password) //logout from database
                dispatch({ type : 'LOGIN', payload : res.user})
                
            }
            // logout from our global state of program
            if(!isCancelled){
                setisPending(false)
                setError(null)
                navigate("/afterLogandSign");
            }

        } catch (err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setisPending(false)
            }
        }

    }
    useEffect(() => {
      },
      ()=>{ //cleanup if user switch the componenet before loging out

        return () =>{
            setisCancelled(true);
        }
    },[])

    return { login, error, isPending }

}