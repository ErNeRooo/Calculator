const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operationSymbols: string[] = ["^", "√", "÷", "×", "-", "+"];

export const Button = ({
  symbol,
  str,
  setter,
  calculate,
  isBlocked,
}: IProps) => {
  const handleNumberClick = () => {
    if (str.length > 29) return;

    if (["^", "√"].includes(str[str.length - 1])) return;

    setter(symbol);
  };

  const handleOperationClick = () => {
    if (str.length > 29) return;
    if (str === "") return;
    if (operationSymbols.includes(str[str.length - 1])) return;
    if (
      !operationSymbols.includes(str[str.length - 1]) &&
      str.search(/[+:√:÷:×:-:^]/g) !== -1
    )
      calculate(true);
    setter(symbol);
  };

  const handleCalculateClick = () => {
    calculate(false);
  };

  if (numbers.toString().includes(symbol))
    return (
      <button
        disabled={isBlocked}
        onClick={handleNumberClick}
        className="btn bg-stone-500"
      >
        {symbol}
      </button>
    );
  else if (symbol === "=")
    return (
      <button
        disabled={isBlocked}
        onClick={handleCalculateClick}
        className="btn bg-blue-500"
      >
        {symbol}
      </button>
    );
  else
    return (
      <button
        disabled={isBlocked}
        onClick={handleOperationClick}
        className="btn "
      >
        {symbol}
      </button>
    );
};

interface IProps {
  symbol: string;
  str: string;
  setter: (symbol: string) => void;
  calculate: (isSecondOperation: boolean) => void;
  isBlocked: boolean;
}
