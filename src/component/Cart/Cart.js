import "./Cart.css";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem, clear, total } = useContext(CardContext);
  const subTotal = (price, quantity) => {
    const subTotalPrice = price * quantity;
    return subTotalPrice.toFixed(2);
  };
  return (
    <>
      <div className="cartContain--Link">
        <Link className="ItemDetail--Link cartContain--Link" to="../catalog">
          Volver a Catalogo
        </Link>
      </div>
      {cartItems.map((item) => (
        <div className="cartContain" key={item.id}>
          <div className="cartContain--Img">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="cartContain--text">
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
          <button
            onClick={() => removeItem(item.id, item.price, item.quantity)}
            className="ItemDetail--Link cartContain--Link"
          >
            Remove
          </button>
          <div>${subTotal(item.price, item.quantity)}</div>
        </div>
      ))}

      {total !== 0 ? (
        <div className="cartBuy">
          <button onClick={() => clear()} className="ItemDetail--Link">
            Remover Todos
          </button>
          <div className="cartTotal">Total: ${total.toFixed(2)} </div>
          <Link className="ItemDetail--buttonBuy" to="../order">
            Terminar Compra
          </Link>
        </div>
      ) : (
        <p className="cartEmpty">El carrito se encuentra vacio...</p>
      )}
    </>
  );
};
export default Cart;
