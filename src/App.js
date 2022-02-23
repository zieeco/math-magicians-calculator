import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './pages.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import CalculatorPage from './Pages/CalculatorPage';
import Quotes from './Pages/Quotes';

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  </>
);

export default App;
