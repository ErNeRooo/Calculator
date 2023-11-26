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
  };
  const clear = () => {
    setOperationString("");
  };

  return (
    <div className="mx-auto w-fit p-2">
      <Screen operationString={operationString} result={result} />

      <div className="w-fit mx-auto">
        <Button symbol={"^"} str={operationString} setter={add} />
        <Button symbol={"√"} str={operationString} setter={add} />
        <Button symbol={"Del"} str={operationString} setter={del} />
        <Button symbol={"C"} str={operationString} setter={clear} />
        <br />

        <Button symbol={"1"} str={operationString} setter={add} />
        <Button symbol={"2"} str={operationString} setter={add} />
        <Button symbol={"3"} str={operationString} setter={add} />
        <Button symbol={"÷"} str={operationString} setter={add} />
        <br />

        <Button symbol={"4"} str={operationString} setter={add} />
        <Button symbol={"5"} str={operationString} setter={add} />
        <Button symbol={"6"} str={operationString} setter={add} />
        <Button symbol={"×"} str={operationString} setter={add} />
        <br />
        <Button symbol={"7"} str={operationString} setter={add} />
        <Button symbol={"8"} str={operationString} setter={add} />
        <Button symbol={"9"} str={operationString} setter={add} />
        <Button symbol={"-"} str={operationString} setter={add} />
        <br />
        <Button symbol={"."} str={operationString} setter={add} />
        <Button symbol={"0"} str={operationString} setter={add} />
        <Button symbol={"="} str={operationString} setter={add} />
        <Button symbol={"+"} str={operationString} setter={add} />
      </div>
    </div>
  );
  setResult("");
}

export default App;
