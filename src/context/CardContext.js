import { createContext, useState } from "react";
import Swal from "sweetalert2";

const initialCardContext = [];

export const CardContext = createContext(initialCardContext);

export const AdProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartProduct, setCartProduct] = useState(0);

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      let copyCartItems = [...cartItems];
      let match = copyCartItems.find((item) => item.id === product.id);
      let idx = copyCartItems.indexOf(match);
      copyCartItems[idx].quantity = copyCartItems[idx].quantity + quantity;
      setCartItems(copyCartItems);
      setCartProduct(cartProduct + quantity);
    } else {
      const copyProduct = { ...product };
      copyProduct.quantity = quantity;
      setCartItems([...cartItems, copyProduct]);

      setCartProduct(cartProduct + quantity);
    }

    const sumItem = product.price * quantity;
    setTotal(total + sumItem);
  };

  const removeItem = (id, price, quantity) => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Desea Remover este Producto!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3483fa",
      confirmButtonText: "Remover",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Tu producto fue removido.",
          icon: "success",
          confirmButtonColor: "#3483fa",
        });
        const remove = cartItems.filter((item) => item.id !== id);
        setCartItems(remove);
        const restItem = quantity * price;
        setTotal(total - restItem);
        setCartProduct(cartProduct - quantity);
      }
    });
  };

  const clear = () => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Desea Remover todos los Productos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3483fa",
      confirmButtonText: "Remover",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminados!",
          text: "Tus productos fueron removidos.",
          icon: "success",
          confirmButtonColor: "#3483fa",
        });
        setCartItems(initialCardContext);
        setTotal(0);
      }
    });
  };

  const cleanAll = () => {
    setCartItems(initialCardContext);
    setTotal(0);
    setCartProduct(0);
  };
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };
  return (
    <CardContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        total,
        cartProduct,
        cleanAll,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
