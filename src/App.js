import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from "./views/homepage/homepage";
import Apply from "./views/apply/apply";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homePage" element={<Homepage />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
};

export default App;