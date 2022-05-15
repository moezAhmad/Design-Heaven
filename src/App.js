import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';

import AfterLogandSign from "./layouts/Accounts/pageAfterLogandSign";
import { LandingPage } from "./pages/landing/landing.component";
import LoginPage from "./layouts/Accounts/Login";
import SignUpPage from "./layouts/Accounts/Signup";


import { AccountPage } from "./pages/Account.component";
import { DesignerPage } from "./pages/designer/designer.component";
import { CompetitionContainer } from "./layouts/competitions_container/competitions_container.component";
import { LongCard } from "./components/long_card/long_card.component";
import { Btn_3 } from "./components/buttons/btn_3/btn_3.component";
import { Btn_4 } from "./components/buttons/btn_4/btn_4.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            
          </Route>

          <Route path="account" element={<AccountPage />}>
            <Route path="" element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route path="/afterLogandSign" element={< AfterLogandSign />} />
          <Route path="designer" element={<DesignerPage />}>
            <Route path="" element={<CompetitionContainer />} />
            <Route path="dashboard" element={<CompetitionContainer />} />
            <Route path="competition" element={<CompetitionContainer />} />
            <Route path="profile" element={<LoginPage />} />
            <Route path="helpcenter" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
