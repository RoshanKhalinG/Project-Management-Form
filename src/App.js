import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PMF from './PMF/PMF'; 
import DAF from './DAF/DAFForm';
import ILF from './ILF/ILFForm';


const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        {/* Navbar */}
        <Navbar theme={theme} setTheme={setTheme} />

        {/* Main Content */}
        <div className={`min-h-screen p-5 ${theme === 'light' ? 'bg-white' : 'bg-gradient-to-br from-purple-900 via-gray-700 to-black'}`}>
          <Routes>
            <Route path="/" element={<PMF theme={theme} />} />
            <Route path="/daf" element={<DAF theme={theme} />} />
            <Route path="/ilf" element={<ILF theme={theme} />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className={`footer ${theme}`}>
          <p>&copy; 2025 All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
