export const Screen = ({ operationString, result }: IProps) => {
  return (
    <div className="w-max h-8 bg-white">
      <div>{operationString}</div>
      <div>{result}</div>
    </div>
  );
};

interface IProps {
  operationString: string;
  result: string;
}
