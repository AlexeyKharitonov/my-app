import React, { useState } from "react";
import Counter from "./counters";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleReset = () => {
    setCounters(initialState);
    console.log("handleReset");
  };
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleIncrement = (id) => {
    const newHandleIncrement = counters.map((count) =>
      count.id === id ? { ...count, value: count.value + 1 } : count
    );
    setCounters(newHandleIncrement);
  };
  const handleDecrement = (id) => {
    const newHandleDecrement = counters.map((count) =>
      count.id === id ? { ...count, value: count.value - 1 } : count
    );
    setCounters(newHandleDecrement);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
