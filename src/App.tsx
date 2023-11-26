import { useState } from "react";
import { NumberButton } from "./components/NumberButton";
import { OperationButton } from "./components/OperationButton";
import { Screen } from "./components/Screen";

function App() {
  const [screenString, setOperationString] = useState("4 + 2 + 3 + 1 / 7");
  const [result, setResult] = useState("1.33333333333");

  const setString = (str: string) => {
    setOperationString((prev) => {
      return prev + str;

      setResult("setResult trolling");
    });
  };

  return (
    <div className="mx-auto w-fit p-2 bg-stone-950 rounded-xl">
      <Screen operationString={screenString} result={result} />

      <div className="w-fit mx-auto">
        <OperationButton
          operationSymbol={"^"}
          setString={setString}
          screenString={screenString}
        />
        <OperationButton
          operationSymbol={"√"}
          setString={setString}
          screenString={screenString}
        />
        <button className="btn">Del</button>
        <button className="btn">C</button>
        <br />

        <NumberButton number={1} />
        <NumberButton number={2} />
        <NumberButton number={3} />
        <OperationButton
          operationSymbol={"÷"}
          setString={setString}
          screenString={screenString}
        />
        <br />

        <NumberButton number={4} />
        <NumberButton number={5} />
        <NumberButton number={6} />
        <OperationButton
          operationSymbol={"×"}
          setString={setString}
          screenString={screenString}
        />
        <br />

        <NumberButton number={7} />
        <NumberButton number={8} />
        <NumberButton number={9} />
        <OperationButton
          operationSymbol={"-"}
          setString={setString}
          screenString={screenString}
        />
        <br />

        <button className="btn">.</button>
        <NumberButton number={0} />
        <button className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-800">
          =
        </button>
        <OperationButton
          operationSymbol={"+"}
          setString={setString}
          screenString={screenString}
        />
      </div>

      <br />
    </div>
  );
}

export default App;
