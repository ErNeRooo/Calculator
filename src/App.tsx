import { useState } from "react";
import { Button } from "./components/Button";
import { Screen } from "./components/Screen";

function App() {
  const [operationString, setOperationString] = useState("4 + 2 + 3 + 1 / 7");
  const [result, setResult] = useState("1.33333333333");

  const setString = (symbol: string) => {
    setOperationString((prev) => {
      return prev + symbol;

      setResult("setResult trolling");
    });
  };

  return (
    <div className="mx-auto w-fit p-2 bg-stone-950 rounded-xl">
      <Screen operationString={operationString} result={result} />

      <div className="w-fit mx-auto">
        <Button symbol={"^"} str={operationString} setString={setString} />
        <Button symbol={"√"} str={operationString} setString={setString} />
        <Button symbol={"Del"} str={operationString} setString={setString} />
        <Button symbol={"C"} str={operationString} setString={setString} />
        <br />

        <Button symbol={"1"} str={operationString} setString={setString} />
        <Button symbol={"2"} str={operationString} setString={setString} />
        <Button symbol={"3"} str={operationString} setString={setString} />
        <Button symbol={"÷"} str={operationString} setString={setString} />
        <br />

        <Button symbol={"4"} str={operationString} setString={setString} />
        <Button symbol={"5"} str={operationString} setString={setString} />
        <Button symbol={"6"} str={operationString} setString={setString} />
        <Button symbol={"×"} str={operationString} setString={setString} />
        <br />
        <Button symbol={"7"} str={operationString} setString={setString} />
        <Button symbol={"8"} str={operationString} setString={setString} />
        <Button symbol={"9"} str={operationString} setString={setString} />
        <Button symbol={"-"} str={operationString} setString={setString} />
        <br />
        <Button symbol={"."} str={operationString} setString={setString} />
        <Button symbol={"0"} str={operationString} setString={setString} />
        <Button symbol={"="} str={operationString} setString={setString} />
        <Button symbol={"+"} str={operationString} setString={setString} />
      </div>

      <br />
    </div>
  );
}

export default App;
