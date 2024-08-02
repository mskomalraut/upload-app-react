// VideoPlayer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(`http://localhost:5000/media/${id}`);
      console.log(response.data);
      setMedia(response.data);
    };
    fetchMedia();
  }, [id]);

  if (!media) return <div>Loading...</div>;

  return (
    <div>
      <h2>{media.title}</h2>
      {media.videoUrl && (<video width="600" controls autoPlay>
        <source src={media.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>)}
    </div>
  );
};

export default VideoPlayer;
