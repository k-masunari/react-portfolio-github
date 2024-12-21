import React, { useEffect, useState } from "react";

import OneCard from "./Cards/CardOne";
import TwoCard from "./Cards/CardTwo";
import ThreeCard from "./Cards/CardThree";
import FourCard from "./Cards/CardFour";
import FiveCard from "./Cards/CardFive";
import SixCard from "./Cards/CardSix";
import SevenCard from "./Cards/CardSeven";
import EightCard from "./Cards/CardEight";
import NineCard from "./Cards/CardNine";
import TenCard from "./Cards/CardTen";
import ElevenCard from "./Cards/CardEleven";
import TwelveCard from "./Cards/CardTwelve";
import ThirteenCard from "./Cards/CardThirteen";

const Cards = [
  { Card: <OneCard /> },
  { Card: <TwoCard /> },
  { Card: <ThreeCard /> },
  { Card: <FourCard /> },
  { Card: <FiveCard /> },
  { Card: <SixCard /> },
  { Card: <SevenCard /> },
  { Card: <EightCard /> },
  { Card: <NineCard /> },
  { Card: <TenCard /> },
  { Card: <ElevenCard /> },
  { Card: <TwelveCard /> },
  { Card: <ThirteenCard /> },
];

const SliderDetail = ({ position }) => {
  const [displayCards, setDisplayCards] = useState([...Cards]);
  const Cards = ["Card1", "Card2", "Card3", "Card4"];
  const [animate, setAnimate] = useState(false); // アニメーション用の状態管理

  useEffect(() => {
    let index = Cards.length - 1;
    const addPrevCard = () => {
      setAnimate(true); 
      setTimeout(() => {
        setDisplayCards((prevCards) => [
          Cards[index % Cards.length],
          ...prevCards.slice(0, prevCards.length - 1),
        ]);
        setAnimate(false);
      }, 300);
      index = (index - 1 + Cards.length) % Cards.length;
    };

    const interval = setInterval(addPrevCard, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-detail">
      <ul
        className="d-flex"
        style={{
          transition: "transform 0.5s ease",
          transform: `translateX(${position}px)`,
        }}
      >
        {displayCards.map((card, index) => (
          <li key={index} id={`card-${index}`}>
            {card.Card}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SliderMain = () => {
  return (
    <div>
      <SliderDetail />
    </div>
  );
};

export default SliderMain;
