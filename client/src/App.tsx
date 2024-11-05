import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./contexts/AppContext";
import { EditWorkOutPlan } from "./views/EditWorkOutPlan";
import FocusMusclesView from "./views/FocusMuscles";
import Header from './views/Header';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<EditWorkOutPlan />} />
            <Route path="/focus-muscles" element={<FocusMusclesView duration={30} />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;