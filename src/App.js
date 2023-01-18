import React from "react";
import { Route, Routes } from "react-router-dom";
import Launche from "./components/Launche/Launche";
import Launchpads from "./pages/Launchpads/Launchpads";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Launchpads />} />
          <Route path="/launches/:id" element={<Launche />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
