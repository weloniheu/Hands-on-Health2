import React, { useState } from "react";
import "./css/Demo.css";

const DemoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  );

  const handleVideoChange = () => {};

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Workout Demo</h1>
        <button className="finish-exercise">Exit Demo</button>
      </div>
      <div className="video-container">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DemoPlayer;
