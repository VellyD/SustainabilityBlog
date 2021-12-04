import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { Footer } from "./components/Footer";
import { AllProducts } from "./components/Products/AllProducts";
import { HomeProducts } from "./components/HomeProducts";

function App() {
  return (
    <div className="App">
      <Header />

      <Register />
      <Login />
      

      <Footer />
    </div>
  );
}

export default App;
