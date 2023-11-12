import PropTypes from "prop-types";
function Buttons({ onClickhandler, value, title }) {
  return (
    <button onClick={onClickhandler} value={value} className="btns">
      {title}
    </button>
  );
}
//for eslint
Buttons.propTypes = {
  onClickhandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Buttons;
