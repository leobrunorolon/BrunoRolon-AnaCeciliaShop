import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTruck,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import "./AdShop.css";

const AdShop = () => {
  return (
    <div className="adShop">
      <div className="adShop--items">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <span>3 Y 6 CUOTAS SIN INTERESES RETIRANDO EN TIENDA</span>
      </div>
      <div className="adShop--items">
        <FontAwesomeIcon icon={faTruck} size="2x" />
        <span>ENVIO GRATIS EN COMPRAS MAYORES DE $10.000</span>
      </div>
      <div className="adShop--items">
        <FontAwesomeIcon icon={faGift} size="2x" />
        <span>OBSEQUIOS EN TODAS TUS COMPRAS</span>
      </div>
    </div>
  );
};
export default AdShop;
