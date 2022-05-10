import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component }  from 'react';

import { LandingPage } from "./pages/landing.component";
import  LoginPage  from "./layouts/Accounts/Login";
import  SignUpPage  from "./layouts/Accounts/Signup";
import  {afterLogandSign}  from "./layouts/Accounts/afterLogandSign";

import { AccountPage } from "./pages/Account.component";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
                
          <Route path="account" element={<AccountPage />}>
            <Route path="" element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route path="/afterLogandSign" element={<afterLogandSign />} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
