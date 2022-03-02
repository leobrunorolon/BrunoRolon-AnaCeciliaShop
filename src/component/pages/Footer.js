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
      <div className="Footer--contain">
        <div className="Footer--division">
          <h2 className="Footer--title">INSTITUCIONAL</h2>
          <Link to={"/"}>INICIO</Link>
          <Link to={"/"}>NOSOTROS</Link>
          <FontAwesomeIcon
            icon={faStore}
            size={"2x"}
            onClick={() => window.open("https://goo.gl/maps/8QZB8HT9JA9isZpD9")}
          />
        </div>
        <div className="Footer--division">
          <h2 className="Footer--title">TURNOS</h2>
          <p
            onClick={() =>
              window.open("https://api.whatsapp.com/send?phone=543885179008")
            }
          >
            TURNOS
          </p>
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
          <span>miexperiencia@anacecilia.com</span>
          <span>0388-5179008</span>
          <span>Rondeau 99 Gral Savio Palpala Jujuy</span>
          <p
            onClick={() =>
              window.open("mailto:test@example.com?subject=subject&body=body")
            }
          >
            TRABAJÁ CON NOSOTROS
          </p>
        </div>
      </div>
      <AdStoreTitle
        text={
          <>
            <FontAwesomeIcon
              icon={faFacebook}
              onClick={() => window.open("https://facebook.com")}
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=543885179008")
              }
            />
            <FontAwesomeIcon
              icon={faInstagram}
              onClick={() => window.open("https://instagram.com")}
            />
          </>
        }
      />
      <p className="FooterR">
        © 2022 Ana Cecilia <span className="FooterSTore">STORE</span> |{" "}
        <span
          onClick={() => window.open("https://github.com/leobrunorolon")}
          className="FooterDesign"
        >
          leobruno Design.
        </span>
      </p>
    </>
  );
};
export default Footer;
