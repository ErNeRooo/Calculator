const operationSymbols: string[] = ["^", "√", "÷", "×", "-", "+"];

export const Operation = ({
  symbol,
  str,
  setter,
  isBlocked,
  calculate,
}: Props) => {
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

type Props = {
  symbol: string;
  str: string;
  setter: (symbol: string) => void;
  isBlocked: boolean;
  calculate: (isSecondOperation: boolean) => void;
};
