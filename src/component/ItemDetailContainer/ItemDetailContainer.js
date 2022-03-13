import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async (productId) => {
      try {
        setIsLoading(true);
        const data = await getDoc(doc(db, "products", productId));
        const item = { id: productId, ...data.data() };
        setProduct(item);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        Swal.close();
      }
    };
    getProduct(productId);
  }, [productId]);

  return (
    <Fragment>
      <div className="ItemDetailContainer">
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
        ) : product.title ? (
          <ItemDetail product={product} />
        ) : (
          Swal.fire({
            icon: "info",
            title: "No se encontro producto seleccionado",
            text: "Quieres Volver al Catalog de Productos",
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            footer:
              '<a href="/catalog" class="ItemDetail--buttonBuy">Ir a catalogo</a>',
          })
        )}
      </div>
    </Fragment>
  );
};

export default ItemDetailContainer;
