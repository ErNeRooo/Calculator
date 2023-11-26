const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operationSymbols: string[] = ["^", "√", "÷", "×", "-", "+"];

export const Button = ({ symbol, str, setter }: IProps) => {
  const handleNumberClick = () => {
    if (str.length > 20) return;

    setter(symbol);
  };

  const handleOperationClick = () => {
    if (str.length > 20) return;

    if (operationSymbols.includes(str[str.length - 1])) return;

    setter(symbol);
  };

  const handleSpecialClick = () => {
    setter("");
  };

  if (numbers.toString().includes(symbol))
    return (
      <button onClick={handleNumberClick} className="btn bg-stone-500">
        {symbol}
      </button>
    );
  else if (["C", "Del"].includes(symbol))
    return (
      <button onClick={handleSpecialClick} className="btn">
        {symbol}
      </button>
    );
  else if (symbol === "=")
    return (
      <button onClick={handleSpecialClick} className="btn bg-blue-500">
        {symbol}
      </button>
    );
  else
    return (
      <button onClick={handleOperationClick} className="btn ">
        {symbol}
      </button>
    );

  symbol;
  setter;
  str;
};

interface IProps {
  symbol: string;
  str: string;
  setter: (symbol: string) => void;
}
