// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./MainComponent";
import CharacterDetailsPage from "./components/CharacterDetailsPage";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route
          path="/character/:id"
          element={<CharacterDetailsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
