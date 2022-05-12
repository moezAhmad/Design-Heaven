import React from "react";

import '../../App.scss'
import { useAuthContext } from '../../Hooks/useAuthContext'
import {useLogout} from '../../Hooks/useLogout'

export default function AfterLogandSign() {
  const { user, dispatch } = useAuthContext()
  const { logout, error, isPending } = useLogout()

  return (
    <div className="main-SignUp">

      <div className="SignandLogin_main">
        <button onClick={logout}>Logout</button>
        {user && (<h1>USER :  {user.email}</h1>)}        
        <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
        <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
        <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
        <img alt="square" className="landing__testimonials__square landing__testimonials__images" />

      </div>
    </div>
  )
}

