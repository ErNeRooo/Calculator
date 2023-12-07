export const Delete = ({ setter }: Props) => {
  return (
    <button onClick={setter} className="btn">
      {"Del"}
    </button>
  );
};

type Props = {
  setter: () => void;
};
