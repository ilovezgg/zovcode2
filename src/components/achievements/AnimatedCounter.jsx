import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import z from './Achievments.module.css';
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  // Анимация с помощью react-spring
  const props = useSpring({ number: count, from: { number: 0 }, config: { duration: 3000 } });

  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount(prevCount => Math.min(prevCount + 1, target)); // Увеличиваем счетчик до целевого значения
      }, 1); // Интервал обновления (50 мс)

      return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }
  }, [count, target]);

  return (
    <div className={z.animated}>
      <animated.span>
        {props.number.to(n => Math.floor(n))}
      </animated.span>
    </div>
    
  );
};

export default AnimatedCounter;

