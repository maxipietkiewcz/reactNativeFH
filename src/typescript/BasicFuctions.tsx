export const BasicFuctions = () => {
  const summerNumber = (a: number, b: number): string => {
    return `La suma de ${a} + ${b} = ${a + b}`;
  };
  return (
    <>
      <h3>Funciones</h3>
      <span>{summerNumber(10, 20)}</span>
    </>
  );
};
