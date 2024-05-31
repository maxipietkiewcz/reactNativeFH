import { useState } from "react";

interface options {
  initialValue?: number;
}
export const useCounter = ({ initialValue = 0 }: options) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (value: number) => {
    const newValue = count + value;
    if (newValue >= 0) {
      setCount(count + value);
    }
  };
  const decrement = (value: number) => {
    const newValue = count - value;
    if (newValue >= 0) {
      setCount(count - value);
    }
  };

  return {
    //propiedades
    count,

    //metodos
    increment,

    decrement,
  };
};
