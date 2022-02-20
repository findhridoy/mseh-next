import React, { useEffect } from "react";
import CountUp from "react-countup";

const CounterCard = ({ counter }) => {
  useEffect(() => {}, [counter]);
  return (
    <>
      <CountUp start={0} end={counter?.count} duration={2.75} delay={0}>
        {({ countUpRef }) => (
          <div className="counterCard">
            <span className="counterCard__icon">{counter?.icon}</span>
            <span className="counterCard__text">{counter?.title}</span>
            <span className="counterCard__count" ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </>
  );
};

export default CounterCard;
