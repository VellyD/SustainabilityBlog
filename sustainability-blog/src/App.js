import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { AllProducts } from "./components/Products/AllProducts";
import { HomeProducts } from "./components/Home/HomeProducts";

import { AuthContext } from "./contexts/authContext";

function App() {
  const [user, setUser] = useState({
    _id: "",
    email: "",
    accessToken: "",
  });

  const login = (authData) => {
    setUser(authData);
  };

  const logout = (authData) => {};

  return (
    <AuthContext.Provider value={{user, login}}>
      <div className="App">
        <Header email={user.email} />

        <Routes>
          <Route path="/" element={<HomeProducts />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-products" element={<AddProduct />} />
          <Route path="/details/:postId" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
