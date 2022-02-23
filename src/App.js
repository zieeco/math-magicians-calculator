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
        <Route exact path="math-magicians-calculator/" element={<Home />} />
        <Route path="math-magicians-calculator/calculator" element={<CalculatorPage />} />
        <Route path="math-magicians-calculator/quotes" element={<Quotes />} />
      </Routes>
    </div>
  </>
);

export default App;
