import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import "../ItemList/ItemList.css";
import ItemList from "../ItemList/ItemList";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import AdSellOf from "../AdSellOf/AdSellOf";
import Swal from "sweetalert2";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const { docs } = await getDocs(query(collection(db, `products`)));
        const data = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        Swal.close();
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="Catalog--contain">
        <p className="Catalog--title">{greeting}</p>
      </div>

      <AdSellOf discount={30} product={"para el cuidado del cabello!"} />
      {isLoading ? (
        Swal.showLoading(Swal.getDenyButton())
      ) : error ? (
        Swal.fire({
          icon: "error",
          title: "A ocurrido un error",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          footer:
            '<a href="/catalog" class="ItemDetail--buttonBuy">Ir a catalogo</a>',
        })
      ) : products.length ? (
        <ItemList products={products} />
      ) : (
        Swal.fire({
          icon: "info",
          title: "No se encontro productos del Catalogo",
          text: "Quieres volver a Home",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          footer: '<a href="/" class="ItemDetail--buttonBuy">Ir a Home</a>',
        })
      )}
    </div>
  );
};

export default ItemListContainer;
