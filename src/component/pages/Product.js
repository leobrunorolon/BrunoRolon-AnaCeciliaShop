import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  console.log(product);

  return (
    <div>
      <h1>ItemDetail</h1>
      <div>
        {product ? (
          <Fragment>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </Fragment>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
