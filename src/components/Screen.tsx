export const Screen = ({ operationString, result }: IProps) => {
  return (
    <div className="w-auto h-28">
      <div className="scr mx-1 mt-1">{operationString}</div>
      <p className="text-white h-6 text-center">=</p>
      <div className="scr mx-1">{result}</div>
    </div>
  );
};

interface IProps {
  operationString: string;
  result: string;
}
