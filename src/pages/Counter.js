import React from "react";
import { countData } from "../assets/countData";
import CounterCard from "../components/CounterCard";

const Counter = () => {
  return (
    <section className="counter section">
      <div className="container">
        <div className="counter__content">
          {countData?.map((counter) => (
            <CounterCard counter={counter} key={counter.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
