import React from "react";
import ReactDOM from "react-dom";
import Lightbox from "./LightBoxMain";

const LightBoxTwo = () => {
  const images = [
    "https://via.placeholder.com/600x400/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x400/7fffd4/333333?text=Image+2",
    "https://via.placeholder.com/600x400/ffd700/333333?text=Image+3",
  ];

  return (
    <div>
      <h1>React Lightbox Example</h1>
      <Lightbox images={images} />
    </div>
  );
};
export default LightBoxTwo;