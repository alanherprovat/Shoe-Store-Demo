import PropTypes from "prop-types";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";

function CartItem({ id, img, title, star, reviews, prevPrice, newPrice }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
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
        </section>
      </div>

      <div className="countHandler">
        <button onClick={() => removeFromCart(id)}>
          <AiOutlineMinus />
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}
//for eslint
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  star: PropTypes.object.isRequired,
  reviews: PropTypes.string.isRequired,
  prevPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
  data: PropTypes.node,
};
export default CartItem;
