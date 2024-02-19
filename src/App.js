/**IMPORTS REACT */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

/**CSS IMPORTS */
import './css/App.css';
import './css/design/navigation.css';
import './css/design/schedule.css';

/**IMPORT COMPONENTS */
import Navbar from './navigation/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';

// Functionality of Navigation deploys here:
// Footer can be loaded here - it will be displayed on every Page, like Navbar
function App() {
  return (
    <Router>
    <>
      <Navbar />

      <Routes>
        <Route path="/home-of-f1/" element={<Home />} />
        <Route path="/home-of-f1/pages/schedule" element={<Schedule />} />
      </Routes>
    </>
  </Router>
  );
}

export default App;
