import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext";
import AdStoreTitle from "../AdStoreTitle/AdStoreTitle";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const { addItem } = useContext(CardContext);
  const [plural, setPlural] = useState("");

  useEffect(() => {
    const handlePluralItems = () => {
      if (count === 1) {
        setPlural(`Agregaste ${count} producto`);
      } else {
        setPlural(`Agregaste ${count} productos`);
      }
    };
    handlePluralItems();
  }, [count]);

  const handleClick = () => setShowButton(false);

  const onAdd = () => {
    addItem(product, count);
    handleClick();
  };

  return (
    <div>
      <AdStoreTitle text={product.title} />
      <div>
        {
          <div className="ItemDetail" key={product.id}>
            <div className="ItemDetail--division1">
              <img
                className="ItemDetail--img"
                alt={product.title}
                src={product.image}
              ></img>
            </div>
            <div className="ItemDetail--division2">
              <h1 className="ItemDetail--title">{product.title}</h1>
              <div className="ItemDetail--description">
                Descripcion del Producto: {product.description}
              </div>
              <p className="ItemDetail--price">Precio: ${product.price}</p>
              <p className="ItemDetail--rate">
                Clasificacion: {product.rating}
              </p>
              {showButton || <p>{plural}</p>}
              {showButton && (
                <ItemCount
                  stock={product.stock}
                  initial={1}
                  count={count}
                  setCount={setCount}
                  onAdd={onAdd}
                />
              )}
              <Link className="ItemDetail--buttonBuy" to="/cart">
                Comprar Ahora
              </Link>
              <Link className="ItemDetail--Link" to="/catalog">
                Volver a Catalogo
              </Link>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
export default ItemDetail;
