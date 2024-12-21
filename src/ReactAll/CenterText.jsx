import React from "react";

let isTyping = false;

const typing = (element, sentence) => {
  if (isTyping) return;
  isTyping = true;
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
    }, 80 * ++index);
  });
};
typing("#typing", "Portfolio made by react");

const CenterText = () => {
  return (
    <div className="copy">
      <p id="typing" className=""></p>
    </div>
  );
};
export default CenterText;
