import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, image, price }) => {
  return (
    <Link className="Item--Link" to={`/product/${id}`}>
      <div key={id}>
        <div className="Item--img">
          <img alt={title} src={image}></img>
        </div>
        <div className="Item--secondary">
          <p className="Item--secondaryPrice">${price}</p>
          <p className="Item--secondaryTitle">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
