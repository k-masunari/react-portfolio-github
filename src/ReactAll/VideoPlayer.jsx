import React, { useRef, useEffect } from "react";
import skyVideo from "./sky.mp4";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      <video
        className="video-size"
        autoPlay
        muted
        loop
        useRef={videoRef}
      >
        <source src={skyVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
