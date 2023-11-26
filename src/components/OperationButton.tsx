const symbols = ["-", "+", "÷", "×", "^2", "√"];

export const OperationButton = ({
  operationSymbol,
  setString,
  screenString,
}: IProps) => {
  const HandleClick = () => {
    if (symbols.includes(screenString[-1])) setString(operationSymbol);

    const ha = "lubię placki";
    console.log(ha[-1]);
  };

  return (
    <button onClick={HandleClick} className="btn">
      {operationSymbol}
    </button>
  );
};

interface IProps {
  operationSymbol: string;
  setString: (str: string) => void;
  screenString: string;
}
