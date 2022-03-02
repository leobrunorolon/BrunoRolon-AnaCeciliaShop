import { db } from "../../firebase/firebase";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import AdShop from "../AdShop/AdShop";
import { Link } from "react-router-dom";
import "../Order/Order.css";

const Order = () => {
  const { cartItems, total, cleanAll } = useContext(CardContext);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [order, setOrder] = useState({
    buyer: buyer,
    items: { cartItems },
    date: Timestamp.now(),
    total: total,
  });

  const createOrder = async (orderCreate) => {
    if (order === false) {
      Swal.fire({
        icon: "info",
        title: "Tu pedido ya fue Cargado",
        footer:
          '<a href="/catalog" class="ItemDetail--buttonBuy">Quieres Seguir comprando</a>',
        showConfirmButton: false,
      });
    } else if (total === 0) {
      Swal.fire({
        icon: "info",
        title: "Tu carrito esta Vacio",
        text: "No tiene ningun producto en tu carrito, vuelve al catalogo",
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        footer:
          '<a href="/catalog" class="ItemDetail--buttonBuy">Ir a catalogo</a>',
      });
    } else {
      const createOrderSubit = await addDoc(
        collection(db, "order"),
        orderCreate
      );
      setOrder(!createOrderSubit);
      Swal.fire({
        icon: "success",
        title: "Tu pedido se a cargado con Exito",
        confirmButtonColor: "#3483fa",
      });
    }
  };
  const handleChangeBuyer = ({ name, value }) => {
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmitBuyer = (event) => {
    event.preventDefault();
    createOrder({ order });
    setIsSubmitDisabled(true);
    cleanAll();
  };

  useEffect(() => {
    const handleOrder = { ...order, buyer: buyer };
    setOrder(handleOrder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyer]);

  useEffect(() => {
    const buyerKeys = Object.keys(buyer);
    const isSomeUserPropEmpty = buyerKeys.some((key) => buyer[key] === "");
    setIsSubmitDisabled(isSomeUserPropEmpty);
  }, [buyer]);

  return (
    <>
      <AdShop />
      {total ? (
        <form
          className="Order--form"
          onSubmit={handleSubmitBuyer}
          onChange={({ target }) => handleChangeBuyer(target)}
        >
          <label className="Order--label" id="name">
            Nombre:
            <input
              className="input"
              name="name"
              type="text"
              required
              value={buyer.name}
            />
          </label>
          <label className="Order--label">
            Telefono:
            <input
              className="input"
              name="phone"
              type="tel"
              placeholder="Ej.1134567891"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              maxLength={10}
              required
              value={buyer.phone}
            />
          </label>
          <label className="Order--label" id="email">
            Email:
            <input
              className="input"
              name="email"
              type="email"
              required
              value={buyer.email}
            />
          </label>
          <input
            className="buttonOrder"
            type="submit"
            disabled={isSubmitDisabled}
            value="Crear orden"
          />
        </form>
      ) : buyer.name ? (
        <div className="Order--buy">
          <h1>Muchas gracias por tu compra</h1>
          <span>
            Nos estaremos comunicando a la brevedad, para informarte el metodo
            de pago y el envio.
          </span>
          <Link className="ItemDetail--Link" to="/">
            Volver a Home
          </Link>
        </div>
      ) : (
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ah ocurrido un error vuelve a Home para continuar",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          footer: '<a href="/" class="ItemDetail--buttonBuy">Ir a Home</a>',
        })
      )}
    </>
  );
};
export default Order;
