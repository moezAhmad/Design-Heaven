import React from "react";
import { useSignup } from "../../Hooks/useAuthContext";

import '../../App.scss'

//importing hook
import { useLogout } from "../../Hooks/useLogout";

export default function afterLogandSign() {
    const {state, dispatch} = useAuthContext()
    console.log(state)

  return (
    <div className="main-SignUp">      {/* Temporary using css of other component */}       

      <div className="SignandLogin_main">

        
        <h1> User name :  </h1>
        <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
        <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
        <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
        <img alt="square" className="landing__testimonials__square landing__testimonials__images" />

        {/* {!isPending && <button className="SignandLogin_butt" onClick={handleSubmit}>Logout </button>}

        {isPending && <button className="SignandLogin_butt" disabled>Logining Out</button>}
        {error && <p className="Error-signUp">{error}</p>} */}
        {/* if there is error then print it */}

      </div>
    </div>
  )
}

