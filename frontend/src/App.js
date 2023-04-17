import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductsListPage from "./pages/ProductsListPage";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    setLoading(false);
  }, [loading]);

  let getProducts = async () => {
    let response = await fetch("/api/products");
    let data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  return (
    <div className="App">
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        setLoading={setLoading}
      />
      <Container maxWidth="xl">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ProductsListPage
                products={filteredProducts}
                setLoading={setLoading}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
