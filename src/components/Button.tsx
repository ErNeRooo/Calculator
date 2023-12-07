export const Button = ({ symbol, calculate, isBlocked }: IProps) => {
  const handleCalculateClick = () => {
    calculate(false);
  };

  return (
    <button
      disabled={isBlocked}
      onClick={handleCalculateClick}
      className="btn bg-blue-500"
    >
      {symbol}
    </button>
  );
};

interface IProps {
  symbol: string;
  calculate: (isSecondOperation: boolean) => void;
  isBlocked: boolean;
}
