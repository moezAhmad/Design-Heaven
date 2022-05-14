import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';

import AfterLogandSign from "./layouts/Accounts/pageAfterLogandSign";
import { LandingPage } from "./pages/landing/landing.component";
import LoginPage from "./layouts/Accounts/Login";
import SignUpPage from "./layouts/Accounts/Signup";


import { AccountPage } from "./pages/Account.component";
import { DesignerPage } from "./pages/dashboard/dashboard_designer.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            
          </Route>

          <Route path="account" element={<AccountPage />}>
            <Route path="" element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route path="/afterLogandSign" element={< AfterLogandSign />} />
          <Route path="designer" element={<DesignerPage />}>
            <Route path="" element={<LoginPage />} />
            <Route path="dashboard" element={<LoginPage />} />
            <Route path="competition" element={<SignUpPage />} />
            <Route path="profile" element={<LoginPage />} />
            <Route path="helpcenter" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
