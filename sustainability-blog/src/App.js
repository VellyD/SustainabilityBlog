import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { AllProducts } from "./components/Products/AllProducts";
import { HomeProducts } from "./components/HomeProducts";

function App() {
  return (
    <div className="App">
      <Header />

      <Login />

      <Footer />
    </div>
  );
}

export default App;
