import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import { BsFillBagHeartFill } from "react-icons/bs";
function Card({ id, img, title, star, reviews, prevPrice, newPrice }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h4 className="card-title">{title}</h4>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              <p>Add To</p>
              <BsFillBagHeartFill className="bag-icon" />
              {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
//for eslint
Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  star: PropTypes.object.isRequired,
  reviews: PropTypes.string.isRequired,
  prevPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
};
export default Card;
