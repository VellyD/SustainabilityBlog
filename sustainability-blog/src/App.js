import "./App.css";
import { Routes, Route } from "react-router";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { AllProducts } from "./components/Products/AllProducts";
import { HomeProducts } from "./components/Home/HomeProducts";

import { AuthProvider } from "./contexts/authContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomeProducts />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-products" element={<AddProduct />} />
          <Route path="/details/:postId" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
