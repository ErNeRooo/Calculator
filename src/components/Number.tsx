export const Number = ({ symbol, str, setter, isBlocked }: Props) => {
  const handleNumberClick = () => {
    if (str.length > 29) return;

    if (["^", "√"].includes(str[str.length - 1])) return;

    setter(symbol);
  };

  return (
    <button
      disabled={isBlocked}
      onClick={handleNumberClick}
      className="btn bg-stone-500"
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
};
