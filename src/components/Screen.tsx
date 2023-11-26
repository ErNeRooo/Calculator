export const Screen = ({ operationString, result }: IProps) => {
  return (
    <>
      <div className="operation">{operationString}</div>
      <div className="result">{result}</div>
    </>
  );
};

interface IProps {
  operationString: string;
  result: string;
}
