import React, { useEffect, useState } from "react";

function ProductsListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    let response = await fetch("http://localhost:8000/api/products")
    let data = await response.json();
    console.log(data)
    //setProducts(data);
  }

  return <div>ProductsListPage</div>;
}

export default ProductsListPage;
