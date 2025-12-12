
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './index.css';
import VideoSummaryPage from './pages/VideoSummaryTabs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VideoSummary" element={<VideoSummaryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
