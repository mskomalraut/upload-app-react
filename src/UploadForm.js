// UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('video', video);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert("uploaded successfully");
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength="50" />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} maxLength="200" />
      </div>
      <div>
        <label>Thumbnail:</label>
        <input type="file" onChange={(e) => setThumbnail(e.target.files[0])} accept="image/png, image/jpeg" />
      </div>
      <div>
        <label>Video:</label>
        <input type="file" onChange={(e) => setVideo(e.target.files[0])} accept="video/mp4, video/mpeg, video/avi" />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
