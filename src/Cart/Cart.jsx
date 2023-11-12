import { IoHome } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import CartItem from "./Cart-item.jsx";
import Products from "../assets/data.jsx";
import { useNavigate } from "react-router-dom";
import "./cart.css";
function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  let modProducts = Products.map((item, index) => {
    return { id: index + 1, ...item };
  });
  return (
    <>
      <div className="Cart-Nav">
        <nav>
          <div className="title">
            <h1>Cart Items</h1>
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
      </div>

      <div />
      <div className="Cart-Items">
        <div className="cart">
          {modProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <CartItem
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  star={product.star}
                  reviews={product.reviews}
                  prevPrice={product.prevPrice}
                  newPrice={product.newPrice}
                />
              );
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
}
export default Cart;
