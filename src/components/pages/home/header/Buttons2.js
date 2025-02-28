import React, { useState, useEffect } from "react";
import z from "./Buttons2.module.css";
import { Link } from "react-router-dom";
const Buttons2 = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 290) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={z.buttonsContainer}>
      <div
          className={`${z.backgroundBlur} ${
            isTransparent ? z.visible : z.hidden
          }`}
        ></div>
        <div className={z.headerButtons}>
          <Link
            to="/"
            className={`${z.mainButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Главная
          </Link>
          <Link
            to="/we"
            className={`${z.aboutusButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            О нас
          </Link>
          <Link
            to="/contacts"
            className={`${z.contactsButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Контакты
          </Link>
          <Link
            to="/catalog"
            className={`${z.catalogButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Каталог
          </Link>
          <Link
            to="/catalog"
            className={`${z.callbackButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Личный кабинет
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons2;

