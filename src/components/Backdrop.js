export default function Backdrop({ toggleShow }) {
  return (
    <div
      className="backdrop"
      onClick={() => {
        toggleShow();
      }}
    />
  );
}
