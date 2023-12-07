export const Clear = ({ setter }: Props) => {
  return (
    <button onClick={setter} className="btn">
      {"C"}
    </button>
  );
};

type Props = {
  setter: () => void;
};
