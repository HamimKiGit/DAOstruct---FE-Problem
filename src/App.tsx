import React from 'react';
import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";
import TheLayout from './components/layout/TheLayout';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="*" element={<TheLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
