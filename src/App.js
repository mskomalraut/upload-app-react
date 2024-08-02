// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadForm from './UploadForm';
import MediaList from './MediaList';
import VideoPlayer from './VideoPlayer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MediaList />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/media/:id" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
