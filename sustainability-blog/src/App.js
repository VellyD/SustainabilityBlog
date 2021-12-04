import "./App.css";
import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { AllProducts } from "./components/Products/AllProducts";
import { HomeProducts } from "./components/HomeProducts";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<HomeProducts />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
