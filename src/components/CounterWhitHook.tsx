import { useCounter } from "../hooks/useCounter";

export const CounterWhitHook = () => {
  const { count, increment, decrement } = useCounter({});

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
