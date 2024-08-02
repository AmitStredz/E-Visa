import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./views/homepage/homepage";
import Apply from "./views/new_application/apply";
import Arrivaldate from "./views/new_application/arrivaldate";
import Prerequisites from "./views/new_application/prerequisites";
import Personal_info from "./views/new_application/personal_info";
import Email from "./views/new_application/email";
import ConfirmEmail from "./views/new_application/dataControl";
import Payment from "./views/new_application/payment";
import Payment2 from "./views/new_application/payment2";
import Status from "./views/new_application/status";
import Privacy from "./views/homepage/pages/privacy";
import Terms from "./views/homepage/pages/terms";
// import Temp from "./views/new_application/temp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/arrivaldate" element={<Arrivaldate />} />
        <Route path="/prerequisites" element={<Prerequisites />} />
        <Route path="/personalinfo" element={<Personal_info />} />
        <Route path="/email" element={<Email />} />
        <Route
          path="/notifications/confirm/:userId"
          element={<ConfirmEmail />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment2" element={<Payment2 />} />
        <Route path="/payment2" element={<Payment2 />} />
        <Route path="/payment2" element={<Payment2 />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/status" element={<Status />} />
        {/* <Route path="/temp" element={<Temp />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
