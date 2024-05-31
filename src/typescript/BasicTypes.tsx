export const BasicTypes = () => {
  const name: string = "Maximiliano";
  const age: number = 20;
  const isValid: boolean = true;
  const powers: string[] = ["fly", "run", "jump", "tackle"];
  return (
    <>
      <h3>Tipos basicos</h3>
      {name} {age} {isValid ? "es valido" : "no es valido"}
      <br />
      {powers.join(" | ")}
    </>
  );
};
