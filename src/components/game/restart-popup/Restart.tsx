import "../popup/popup.scss";

interface properties {
  handleRestart: React.MouseEventHandler<HTMLButtonElement>;
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}
export const Restart = ({ handleCancel, handleRestart }: properties) => {
  return (
    <div className="popup">
      <h2>RESTART GAME?</h2>
      <div className="popup-bottom">
        <button onClick={handleCancel}>NO, CANCEL</button>
        <button onClick={handleRestart}>YES, RESTART</button>
      </div>
    </div>
  );
};
