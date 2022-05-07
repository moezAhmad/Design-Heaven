import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';

import { LandingPage } from "./pages/landing.component";
import  LoginPage  from "./layouts/Accounts/Login";
import  SignUpPage  from "./layouts/Accounts/Signup";
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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
