import PropTypes from "prop-types";
import "./Price.css";
import Input from "../../components/input.jsx";
function Price({ handleChg }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChg} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input handleChange={handleChg} value={50} title="$0-50" name="test2" />
      <Input
        handleChange={handleChg}
        value={100}
        title="$50-100"
        name="test2"
      />
      <Input
        handleChange={handleChg}
        value={150}
        title="$100-150"
        name="test2"
      />
      <Input
        handleChange={handleChg}
        value={200}
        title="Over $150"
        name="test2"
      />
    </div>
  );
}
//for eslint
Price.propTypes = {
  handleChg: PropTypes.func.isRequired,
};
export default Price;
