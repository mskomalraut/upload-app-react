// MediaList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get('http://localhost:5000/media');
      setMediaList(response.data);
    };
    fetchMedia();
  }, []);

  return (
    <div>
      {mediaList.map((media) => (
        <div key={media._id}>
          <Link to={`/media/${media._id}`}>
            <img src={media.thumbnailUrl} alt={media.title} width="100" />
            <h3>{media.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MediaList;
