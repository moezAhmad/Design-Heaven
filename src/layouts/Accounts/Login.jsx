import React from "react";
import { useState } from "react";
import "../../App.scss";

import google_photo from "./img/Google__G__Logo.svg"
import facebook_photo from "./img/facebook-new.png"
import { Textlabel_1 } from "../../components/TextFields/textfield.component"
import { SocialButn } from "./Social_login_bttn.component"

export default function LoginPage() {


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleOnClick = () => { alert("clicked") }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("done")
    console.log(email,password)
  }

  // console.log(email,password)

  return (
    <div className="SignandLogin_main">

      <Textlabel_1 state={email} setState={setemail} texttype='email' innertext='Email' />
      <Textlabel_1 state={password} setState={setpassword} texttype='password' innertext='Password' />

      <button className="SignandLogin_butt " onClick={handleSubmit}>Login </button>
      &nbsp;
      <h3>OR</h3>
      <hr />
      <div>
        <div onClick={handleOnClick}> <SocialButn srcurl={google_photo} text="Login in with Google" /></div>
        <br></br>
        <div onClick={handleOnClick}> <SocialButn srcurl={facebook_photo} text="Login in with Facebook" /></div>
      </div>
      <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
      <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
      <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
      <img alt="square" className="landing__testimonials__square landing__testimonials__images" />

    </div>)
}



