import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(10);

  const increment = (value: number) => {
    setCount(count + value);
  };
  const decrement = (value: number) => {
    setCount(count - value);
  };

  return (
    <>
      <h1>
        Contador <small>{count}</small>
      </h1>

      <div>
        <button onClick={() => decrement(1)}>-1</button>
        &nbsp;
        <button onClick={() => increment(1)}>+1</button>
      </div>
    </>
  );
};
