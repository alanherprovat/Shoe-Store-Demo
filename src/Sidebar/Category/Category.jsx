import PropTypes from "prop-types";
import Input from "../../components/input.jsx";
import "./Category.css";
function Category({ handleChg }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChg} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChg}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChg}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChg}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChg}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}
//for eslint
Category.propTypes = {
  handleChg: PropTypes.func.isRequired,
};
export default Category;
