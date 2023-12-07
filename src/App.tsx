import { useState } from "react";
import { Button } from "./components/Button";
import { Screen } from "./components/Screen";
import { Delete } from "./components/Delete";

function App() {
  const [operationString, setOperationString] = useState("");
  const [result, setResult] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const add = (symbol: string) => {
    setOperationString((prev) => prev + symbol);
  };

  const del = () => {
    setOperationString((prev) => {
      const str: string = prev.slice(0, -1);
      return str;
    });
    setResult("");
    setIsDisabled(false);
  };

  const clear = () => {
    setOperationString("");
    setResult("");
    setIsDisabled(false);
  };

  const calculate = (isSecondOperation: boolean = false) => {
    const operation: string[] = operationString.split("").filter((element) => {
      return ["^", "√", "÷", "×", "-", "+"].includes(element);
    });

    let isUpdateFirst = isSecondOperation;

    if (operation == null) return;

    const symbol: string = operation[0];

    let first: number =
      operationString.split(symbol)[0] === ""
        ? 0
        : parseFloat(operationString.split(symbol)[0]);
    const second: number =
      operationString.split(symbol)[1] === ""
        ? first
        : parseFloat(operationString.split(symbol)[1]);

    if (operationString.split(symbol)[1] === "") isUpdateFirst = true;

    let operationResult: string = "";

    console.log(symbol);
    switch (symbol) {
      case "^":
        operationResult = Math.pow(first, 2).toString();
        break;

      case "√":
        operationResult = Math.sqrt(first).toString();
        break;

      case "÷":
        operationResult = (first / second).toString();
        if (second === 0) {
          setIsDisabled(true);
          setResult("Nie można dzielić przez 0");
          return;
        }
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
        operationResult = "";
        break;
    }

    setResult(operationResult.toString());

    if (result.length > 20) {
      setResult("Przepełnienie");
      return;
    }

    if (isUpdateFirst) {
      first = parseFloat(result);
      setOperationString(operationResult);
    }
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
          isBlocked={isDisabled}
        />
        <Button
          symbol={"√"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Delete setter={del} />
        <Button
          symbol={"C"}
          str={operationString}
          setter={clear}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />

        <Button
          symbol={"1"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"2"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"3"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"÷"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />

        <Button
          symbol={"4"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"5"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"6"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"×"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />
        <Button
          symbol={"7"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"8"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"9"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"-"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />
        <Button
          symbol={"."}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"0"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"="}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Button
          symbol={"+"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
      </div>
    </div>
  );
}

export default App;
