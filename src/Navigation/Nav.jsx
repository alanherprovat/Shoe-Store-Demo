import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import PropTypes from "prop-types";
import { IoHome } from "react-icons/io5";

import "./Nav.css";
function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Explore what you need"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className="profile-container">
        <Link to="/">
          <IoHome className="nav-icons" />
        </Link>
        <Link to="/cart">
          <BsCart4 className="nav-icons" />
        </Link>
        <a href="#">
          <AiOutlineUser className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

//for eslint
Nav.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
export default Nav;
