import { useState, useEffect , useRef } from "react";
import { projectAuth } from "../Firebase/firebase-config";
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

    const [isCancelled, setisCancelled ] = useState(false)
    const [error ,setError] = useState(null)
    const [isPending ,setisPending] = useState(false)
    const {dispatch} = useAuthContext()

    const count = useRef(0);

    const login = async (email,password) => {
        setError(null)
        setisPending(true)

        //Sign the user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email,password) //logout from database

            // logout from our global state of program
            dispatch({ type : 'LOGIN', payload : res.user})
            if(!isCancelled){
                setisPending(false)
                setError(null)
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
        count.current = count.current + 1;
        console.log(count.current)
      },
      ()=>{ //cleanup if user switch the componenet before loging out

        return () =>{
            setisCancelled(true);
        }
    },[])
    

    return { login, error, isPending }

}