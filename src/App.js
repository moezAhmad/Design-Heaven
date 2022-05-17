import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import AfterLogandSign from "./layouts/Accounts/pageAfterLogandSign";
import { LandingPage } from "./pages/landing/landing.component";
import LoginPage from "./layouts/Accounts/Login";
import SignUpPage from "./layouts/Accounts/Signup";


import { AccountPage } from "./pages/Account.component";
import { DesignerPage } from "./pages/designer/designer.component";
import { DashboardDesigner } from "./layouts/designer/dashboard/dashboard_designer.component";
import { ProfileDesigner } from "./layouts/designer/profile/profile_designer.component";
import { DesignsContainer } from "./components/designs_container/designs_container.component";
import { DesignerAbout } from "./components/designer_about/designer_about.component";
import { DesignerCompetitionDetails } from "./layouts/designer/competition_details/_competition_details.component";
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
            <Route path="dashboard" element={<DashboardDesigner />} />
            <Route path="competition" element={<DesignerCompetitionDetails />} />
            <Route path="profile" element={<ProfileDesigner />}>
              <Route path="current" element={<DesignsContainer />} />
              <Route path="past" element={<DesignsContainer />} />
              <Route path="about" element={<DesignerAbout />} />
            </Route>
            <Route path="helpcenter" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
