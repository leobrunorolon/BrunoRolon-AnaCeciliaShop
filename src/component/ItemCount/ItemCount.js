import { Fragment } from "react";
import "../ItemCount/ItemCount.css";
const ItemCount = ({ stock, initial, count, setCount, onAdd }) => {
  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };
  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  return (
    <Fragment>
      <div className="ItemCount--container">
        <p>Stock Disponible: {stock}</p>
        <div className="ItemCount">
          <p className="ItemCount--signo" onClick={onDecrease}>
            -
          </p>
          <p>{count}</p>
          <p className="ItemCount--signo" onClick={onIncrease}>
            +
          </p>
        </div>
        <div className="ItemCount--buttonContainer">
          <button className="ItemCount--button" onClick={onAdd}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemCount;
