import React from "react";
import z from "./HouseCard.module.css"; // Подключаем стили

const HouseCard = ({ image, title, description, price }) => {
  return (
    <div className={z.card}>

      <img src={image} alt={title} className={z.cardImage} />


      <div className={z.cardContent}>
        <div className={z.cardTitle}>{title}</div>
        <div className={z.cardDescription}>{description}</div>
        <div className={z.cardPrice}>{price}</div>
      </div>
    </div>
  );
};

export default HouseCard;