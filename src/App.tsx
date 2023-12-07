import { useState } from "react";
import { Equal } from "./components/Equal";
import { Screen } from "./components/Screen";
import { Delete } from "./components/Delete";
import { Clear } from "./components/Clear";
import { Number } from "./components/Number";
import { Operation } from "./components/Operation";

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
        <Operation
          symbol={"^"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Operation
          symbol={"√"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <Delete setter={del} />
        <Clear setter={clear} />
        <br />

        <Number
          symbol={"1"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"2"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"3"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Operation
          symbol={"÷"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />

        <Number
          symbol={"4"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"5"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"6"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Operation
          symbol={"×"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />

        <Number
          symbol={"7"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"8"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"9"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Operation
          symbol={"-"}
          str={operationString}
          setter={add}
          calculate={calculate}
          isBlocked={isDisabled}
        />
        <br />

        <Number
          symbol={"."}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Number
          symbol={"0"}
          str={operationString}
          setter={add}
          isBlocked={isDisabled}
        />
        <Equal symbol={"="} calculate={calculate} isBlocked={isDisabled} />
        <Operation
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
