import { useState, useEffect ,useRef } from 'react'
import { projectAuth } from '../Firebase/firebase-config'

import  { useAuthContext } from "./useAuthContext"

import { useNavigate  } from "react-router-dom";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const count = useRef(0);

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)

      }
      // console.log(useAuthContext.state)
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
        navigate("/afterLogandSign");

      }
    }
    
  }

  useEffect(() => {
    // count.current = count.current + 1;
    // console.log(count.current)
  },
    () => {
    return () => {
      console.log("cleanup called")
      setIsCancelled(true)}
  }, [])

 

  return { signup, error, isPending }
}