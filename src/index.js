import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import TKL from './Components/TKL'
import SixtyPercent from './Components/SixtyPercent';
import { HashRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
          <Route path="/" element={<App />} component={<App/>}/>
          <Route path="/tkl" element={<TKL />} component={<TKL/>}/>
          <Route path="/60%" element={<SixtyPercent />} component={<SixtyPercent/>}/>
      </Routes>
  </HashRouter>
);

