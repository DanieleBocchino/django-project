import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductsListPage from "./pages/ProductsListPage";
import ProductPage from "./pages/ProductPage";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductsListPage/>} />
        <Route path="/product/:id" exact element={<ProductPage/>} />

      </Routes>
    </div>
  );
}

export default App;
