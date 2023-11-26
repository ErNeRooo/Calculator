import "./App.css";
import { useState } from "react";
import { NumberButton } from "./components/NumberButton";
import { OperationButton } from "./components/OperationButton";
import { Screen } from "./components/Screen";

function App() {
  const [screenString, setOperationString] = useState("");
  const [result, setResult] = useState("");

  setResult("");

  const setString = (str: string) => {
    setOperationString((prev) => {
      return prev + str;
    });
  };

  return (
    <>
      <h1>Fancy Calculator</h1>

      <Screen operationString={screenString} result={result} />

      <NumberButton number={0} />
      <NumberButton number={1} />
      <NumberButton number={2} />
      <NumberButton number={3} />
      <br />
      <NumberButton number={4} />
      <NumberButton number={5} />
      <NumberButton number={6} />
      <NumberButton number={7} />
      <br />

      <NumberButton number={8} />
      <NumberButton number={9} />
      <OperationButton
        operationSymbol={"-"}
        setString={setString}
        screenString={screenString}
      />
      <OperationButton
        operationSymbol={"+"}
        setString={setString}
        screenString={screenString}
      />
      <br />
      <OperationButton
        operationSymbol={"÷"}
        setString={setString}
        screenString={screenString}
      />
      <OperationButton
        operationSymbol={"×"}
        setString={setString}
        screenString={screenString}
      />
      <OperationButton
        operationSymbol={"^2"}
        setString={setString}
        screenString={screenString}
      />
      <OperationButton
        operationSymbol={"√"}
        setString={setString}
        screenString={screenString}
      />
    </>
  );
}

export default App;
