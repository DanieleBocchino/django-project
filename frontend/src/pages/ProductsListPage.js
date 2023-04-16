import React, { useEffect, useState } from "react";
import ListProductItem from "../components/ListProductItem";
import { Container, Grid } from "@mui/material";

function ProductsListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    let response = await fetch("/api/products");
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <Container style={{ marigin: 2 }}>
      ProductsListPage
      <div className="products-list">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => (
            <Grid style={{ margin: '1vh' }} xs={2} sm={4} md={4} key={index}>
              <ListProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default ProductsListPage;
