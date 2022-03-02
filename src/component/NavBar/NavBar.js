import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = ({ children }) => {
  return (
    <div className="navBar--container">
      <nav className="navBar">
        <Link className="navBar--p" to="/">
          <p>Ana Cecilia</p>
        </Link>
        <ul className="navBar--ul">
          <li className="navBar--li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBar--linkA" : "navBar--link"
              }
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li className="navBar--li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBar--linkA" : "navBar--link"
              }
              to="/catalog"
            >
              Catalogo
            </NavLink>
          </li>
          <li className="navBar--li navBar--secondaryContainer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBar--linkA" : "navBar--link"
              }
              to="/category"
            >
              Categorias
            </NavLink>
            <ul className="navBar--secondary">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "navBar--linkSecondaryA"
                      : "navBar--linkSecondary"
                  }
                  to="/category/electronics"
                >
                  Electronicos
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "navBar--linkSecondaryA"
                      : "navBar--linkSecondary"
                  }
                  to="/category/barberia"
                >
                  Barberia
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "navBar--linkSecondaryA"
                      : "navBar--linkSecondary"
                  }
                  to="/category/alisados"
                >
                  Alisados
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "navBar--linkSecondaryA"
                      : "navBar--linkSecondary"
                  }
                  to="/category/cabello"
                >
                  Cabello
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="navBar--li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBar--linkA" : "navBar--link"
              }
              to="/contact"
            >
              Contactanos
            </NavLink>
          </li>
        </ul>
        {children}
      </nav>
    </div>
  );
};
export default NavBar;
