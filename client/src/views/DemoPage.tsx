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
    const demoInfo = demo_urls.get(exerciseName);

    if (demoInfo) {
      setVideoUrl(demoInfo.primary); // Use primary URL by default
    } else {
      setVideoUrl("https://www.youtube.com/embed/dQw4w9WgXcQ"); // Default fallback
    }
  }, [exerciseName]);

  const handleVideoError = () => {
    console.log("video error");
    const demoInfo = demo_urls.get(exerciseName);
    if (demoInfo && demoInfo.backup) {
      setVideoUrl(demoInfo.backup); // Use backup URL on error
    }
  };

  function GoToCurrWorkoutView() {
    navigate("/current-workout");
  }

  return (
    <div>
      <div className="header-container">
        <h1 className="text--header-title">Workout Demo</h1>
        <button
          className="finish-exercise-demo"
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
            onError={handleVideoError} //Try to use backup link if error occurs
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DemoPlayer;
