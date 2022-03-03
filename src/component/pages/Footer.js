import "../Footer/Footer.css";
import AdStoreTitle from "../AdStoreTitle/AdStoreTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* Se cambio en footer los onClick con funcion windows.open() por Link to={"//"} */}
      <div className="Footer--contain">
        <div className="Footer--division">
          <h2 className="Footer--title">INSTITUCIONAL</h2>
          <Link to={"/"}>INICIO</Link>
          <Link to={"/"}>NOSOTROS</Link>
          <Link to={"//goo.gl/maps/8QZB8HT9JA9isZpD9"} target={"_blank"}>
            <FontAwesomeIcon icon={faStore} size={"2x"} />
          </Link>
        </div>
        <div className="Footer--division">
          <h2 className="Footer--title">TURNOS</h2>
          <Link
            to={"//api.whatsapp.com/send?phone=543885179008"}
            target={"_blank"}
          >
            TURNOS
          </Link>
          <Link to={"/"}>SERVICIOS</Link>
          <Link to={"/catalog"}>LISTA DE PRECIOS</Link>
          <Link to={"/tyc"}>TÉRMINOS Y CONDICIONES</Link>
        </div>
        <div className="Footer--division">
          <h2 className="Footer--title">STORE</h2>
          <Link to={"/catalog"}>STORE</Link>
          <Link to={"/tyc"}>POLITICAS DE REEMBOLSO</Link>
          <Link to={"/tyc"}>PREGUNTAS FRECUENTES</Link>
          <Link to={"/tyc"}>DEVOLUCIONES</Link>
        </div>
        <div className="Footer--division">
          <h2 className="Footer--title">CONTACTO</h2>
          <Link to={"//mailto:m.leobrunorolon@gmail.com"} target={"_blank"}>
            miexperiencia@anacecilia.com
          </Link>
          <Link
            to={"//api.whatsapp.com/send?phone=543885179008"}
            target={"_blank"}
          >
            +54 388-5179008
          </Link>
          <Link to={"//goo.gl/maps/8QZB8HT9JA9isZpD9"} target={"_blank"}>
            Rondeau 99 Gral Savio Palpala Jujuy
          </Link>
          <Link
            to={"//mailto:m.miexperiencia@anacecilia.com"}
            target={"_blank"}
          >
            TRABAJÁ CON NOSOTROS
          </Link>
        </div>
      </div>
      <AdStoreTitle
        text={
          <>
            <Link to={"//facebook.com"} target={"_blank"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              to={"//api.whatsapp.com/send?phone=543885179008"}
              target={"_blank"}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
            <Link to={"//instagram.com"} target={"_blank"}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </>
        }
      />
      <p className="FooterR">
        © 2022 Ana Cecilia <span className="FooterSTore">STORE</span> |{" "}
        <Link
          to={"//github.com/leobrunorolon"}
          target={"_blank"}
          className="FooterDesign"
        >
          leobruno Design.
        </Link>
      </p>
    </>
  );
};
export default Footer;
