import React from "react";
import Titles from "../../Title";
import Images from "../SliderImages";

const SixCard = () => {
  return (
    <div className="card-width card mx-3 border">
      <img src={Images[5].src} alt="" />
      <div className="py-4 container">
        <h3 className="h3 fw-bolder">{Titles[5].title}</h3>
        <div className="bg-light">
          <ul className="fw-bold card bg-white border py-2 container">
            <li className="py-1">HTML</li>
            <li className="py-1">CSS</li>
            <li className="py-1">Jquery</li>
            <li className="py-1">WordPress</li>
          </ul>
        </div>
        <div className="text-center pt-4">
          <a
            className="text-white none hover py-2 px-4 bg-dark text-center d-inline-block"
            href=""
          >
            アップで見る
          </a>
        </div>
      </div>
    </div>
  );
};
export default SixCard;
