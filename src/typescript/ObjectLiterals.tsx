export const ObjectLiterals = () => {
  interface Person {
    name: string;
    age: number;
    isValid?: boolean;
    powers: Powers;
  }
  interface Powers {
    fly: boolean;
    run: boolean;
    jump: boolean;
    tackle: boolean;
  }

  const person: Person = {
    name: "Maximiliano",
    age: 20,
    isValid: undefined,
    powers: {
      fly: true,
      run: true,
      jump: true,
      tackle: true,
    },
  };
  return (
    <>
      <h3>Objeto literal</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
