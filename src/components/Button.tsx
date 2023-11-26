export const Button = ({ symbol, str: operation, setString }: IProps) => {
  //dodaje stringa
  //
  return <button className="btn">{symbol}</button>;
  symbol;
  setString;
  operation;
};

interface IProps {
  symbol: string;
  str: string;
  setString: (symbol: string) => void;
}
