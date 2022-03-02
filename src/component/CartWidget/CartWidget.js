import "../CartWidget/CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

const CartWidget = ({ cart }) => {
  const { cartItems, cartProduct } = useContext(CardContext);
  return (
    <Link className="navBar--cart" to="/cart">
      <img src={cart} alt="" />
      {cartItems.length !== 0 && (
        <div className="navBar--cartItems">{cartProduct}</div>
      )}
    </Link>
  );
};
export default CartWidget;
