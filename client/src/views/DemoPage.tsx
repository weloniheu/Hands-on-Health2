import React, { useEffect, useState } from "react";
import "./css/Demo.css";
import { useNavigate, useParams } from "react-router-dom";
import { demo_urls } from "../constants/demo_urls";

const DemoPlayer = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  );

  const { exerciseName = "" } = useParams(); //Get the param from URL

  useEffect(() => {
    const url = demo_urls.get(exerciseName);
    setVideoUrl(url || "https://www.youtube.com/embed/dQw4w9WgXcQ"); // use default video if no url is found
  }, []);

  function GoToCurrWorkoutView() {
    navigate("/current-workout");
  }

  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Workout Demo</h1>
        <button
          className="finish-exercise"
          onClick={GoToCurrWorkoutView}
        >
          Exit Demo
        </button>
      </div>
      <div className="video-surround">
        <div className="video-container">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DemoPlayer;
