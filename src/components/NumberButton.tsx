export const NumberButton = ({ number }: IProps) => {
  return <button className="btn bg-stone-600">{number}</button>;
};

interface IProps {
  number: number;
}
