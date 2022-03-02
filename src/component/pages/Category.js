import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Swal from "sweetalert2";
import AdShop from "../AdShop/AdShop";

const Category = () => {
  const [products, setProducts] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const { docs } = await getDocs(
          query(collection(db, `products`), where("category", "==", id))
        );
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
  }, [id]);

  return (
    <>
      <AdShop />
      <div>
        {isLoading ? (
          Swal.showLoading()
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
            title: "No se encontro Categoria",
            text: "Quieres volver a Home",
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            footer:
              '<a href="/catalog" class="ItemDetail--buttonBuy">Ir a Catalogo</a>',
          })
        )}
      </div>
    </>
  );
};

export default Category;
