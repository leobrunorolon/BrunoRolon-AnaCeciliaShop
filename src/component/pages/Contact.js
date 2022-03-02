import "../Contact/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <>
      <div className="Contact--contain">
        <div className="Contact--division">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size={"6x"}
            onClick={() =>
              window.open("https://api.whatsapp.com/send?phone=543885179008")
            }
          />
          <p>Comunicate con notros via whatsapp.</p>
        </div>
        <div className="Contact--division">
          <FontAwesomeIcon
            icon={faFacebook}
            size={"6x"}
            onClick={() => window.open("https://facebook.com")}
          />
          <p>Comunicate con notros via facebook.</p>
        </div>
        <div className="Contact--division">
          <FontAwesomeIcon
            icon={faInstagram}
            size={"6x"}
            onClick={() => window.open("https://instagram.com")}
          />
          <p>Tambien via instagram</p>
        </div>
        <div className="Contact--division">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            size={"6x"}
            onClick={() => window.open("https://goo.gl/maps/8QZB8HT9JA9isZpD9")}
          />
          <p>Encuentranos en:</p>
        </div>
      </div>
    </>
  );
};
export default Contact;
