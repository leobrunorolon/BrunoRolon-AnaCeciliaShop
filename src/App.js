import "./App.css";
import CartWidget from "./component/CartWidget/CartWidget";
import NavBar from "./component/NavBar/NavBar";
import cart from "./assets/img/bag.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./component/pages/Footer";
import Home from "./component/pages/Home.js";
import Catalog from "./component/pages/Catalog";
import Category from "./component/pages/Category";
import Contact from "./component/pages/Contact";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import CategoryAll from "./component/CategoryAll/CategoryAll";
import { AdProvider } from "./context/CardContext";
import Order from "./component/pages/Order";
import CartPage from "./component/pages/CartPage";
import Tyc from "./component/T&C/TyC";

function App() {
  return (
    <AdProvider>
      <Router>
        <div className="App">
          <NavBar>
            <CartWidget cart={cart} />
          </NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/category" element={<CategoryAll />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/tyc" element={<Tyc />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AdProvider>
  );
}

export default App;
