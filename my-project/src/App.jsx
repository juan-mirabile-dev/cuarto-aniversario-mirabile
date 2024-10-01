import { useState } from 'react'
import './App.css'
import TitleSection from './components/TitleSection'
import Members from './components/Members'
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';


import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';






const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;