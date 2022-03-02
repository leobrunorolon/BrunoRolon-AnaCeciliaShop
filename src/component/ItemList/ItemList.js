import { Fragment } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ products }) => {
  return (
    <>
      <h1 className="Itemlist--title">
        Ana Cecilia <span className="Itemlist--titleDetail">STORE</span>
      </h1>
      <Fragment>
        <div className="ItemList">
          {products.map((product) => (
            <Item {...product} />
          ))}
        </div>
      </Fragment>
    </>
  );
};

export default ItemList;
