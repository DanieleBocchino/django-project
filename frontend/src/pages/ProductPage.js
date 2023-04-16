import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListProductItem from "../components/ListProductItem";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct();
  }, [id]);

  let getProduct = async () => {
    let response = await fetch(`/api/products/${id}`);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  return (
    <div>
      <ListProductItem product={product} />
    </div>
  );
}

export default ProductPage;
