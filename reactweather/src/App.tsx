import React from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './pages/shared/header/Header';


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/month-statistics' element={<MonthStatistics />} /> 
      </Routes>
    </div>
  );
}

export default App;
