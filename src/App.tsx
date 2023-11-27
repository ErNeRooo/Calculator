import { useState } from "react";
import { Button } from "./components/Button";
import { Screen } from "./components/Screen";

function App() {
  const [operationString, setOperationString] = useState("");
  const [result, setResult] = useState("");

  const add = (symbol: string) => {
    setOperationString((prev) => prev + symbol);
  };
  const del = () => {
    setOperationString((prev) => {
      const str: string = prev.slice(0, -1);
      return str;
    });
    setResult("");
  };
  const clear = () => {
    setOperationString("");
    setResult("");
  };
  const calculate = () => {
    const operation = operationString.match(/[+:√:÷:×:-:^]/g);

    if (operation == null) return;

    const symbol: string = operation[0];

    const first: number = parseFloat(operationString.split(symbol)[0]);
    const second: number = parseFloat(operationString.split(symbol)[1]);
    let operationResult: string = "";

    switch (symbol) {
      case "^":
        operationResult = Math.pow(first, 2).toString();
        break;

      case "√":
        operationResult = Math.sqrt(first).toString();
        break;

      case "÷":
        operationResult = (first / second).toString();
        if (symbol === "÷" && second === 0)
          operationResult = "Nie można dzielić przez 0";
        break;

      case "×":
        operationResult = (first * second).toString();
        break;

      case "-":
        operationResult = (first - second).toString();
        break;

      case "+":
        operationResult = (first + second).toString();
        break;

      default:
        operationResult = "86";
        break;
    }

    setResult(operationResult.toString());
  };

  return (
    <div className="mx-auto w-fit p-2">
      <Screen operationString={operationString} result={result} />

      <div className="w-fit mx-auto">
        <Button
          symbol={"^"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"√"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"Del"}
          str={operationString}
          setter={del}
          calculate={calculate}
        />
        <Button
          symbol={"C"}
          str={operationString}
          setter={clear}
          calculate={calculate}
        />
        <br />

        <Button
          symbol={"1"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"2"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"3"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"÷"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <br />

        <Button
          symbol={"4"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"5"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"6"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"×"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <br />
        <Button
          symbol={"7"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"8"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"9"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"-"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <br />
        <Button
          symbol={"."}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"0"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
        <Button
          symbol={"="}
          str={operationString}
          setter={calculate}
          calculate={calculate}
        />
        <Button
          symbol={"+"}
          str={operationString}
          setter={add}
          calculate={calculate}
        />
      </div>
    </div>
  );
  setResult("");
}

export default App;
