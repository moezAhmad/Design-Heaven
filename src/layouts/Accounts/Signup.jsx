import React from "react";
import { useState } from "react";

import '../../App.scss'

import {Textlabel_1} from "../../components/TextFields/textfield.component"


export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()  //to avoid referesh
    alert("done Signup")
    
  }


  return (
    <div>
    
    <div className="SignandLogin_main">
            
    <Textlabel_1 state = {firstName} setState = {setFirstName} texttype = 'text' innertext='First Name'/>
    <Textlabel_1 state = {lastName} setState = {setLastName} texttype = 'text' innertext='Last Name'/>
    <Textlabel_1 state = {email} setState = {setEmail} texttype = 'text' innertext='Email'/>
    <Textlabel_1 state = {password} setState = {setPassword} texttype = 'password' innertext='Password'/> 
    <Textlabel_1 state = {Cpassword} setState = {Cpassword} texttype = 'password' innertext='Confirm Password'/> 
    

   <button className="SignandLogin_butt" onClick={handleSubmit}>SignUp </button>
   <br></br>

   {/* <hr/> */}

       <img alt="circle" className="landing__testimonials__circle landing__testimonials__images" />
       <img alt="sphere" className="landing__testimonials__sphere landing__testimonials__images" />
       <img alt="triangle" className="landing__testimonials__triangle landing__testimonials__images" />
       <img alt="square" className="landing__testimonials__square landing__testimonials__images" />  

    </div>
</div>
  )
}

