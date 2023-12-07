export const DeleteButton = ({ setter }: Props) => {
  return (
    <button onClick={setter} className="btn">
      {"Del"}
    </button>
  );
};

type Props = {
  setter: () => void;
};
