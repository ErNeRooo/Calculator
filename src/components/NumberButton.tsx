export const NumberButton = ({ number }: IProps) => {
  return <button className="btn">{number}</button>;
};

interface IProps {
  number: number;
}
