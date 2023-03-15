import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Cart, Home } from "./pages";
// import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
};

export default App;
