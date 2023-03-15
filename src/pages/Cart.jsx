import { useContext } from "react";
import { ShopContext } from "../context/CartContext";
import ProductCart from "../components/ProductCart/ProductCart";

const Cart = () => {
  const {state} = useContext(ShopContext);

  return (
    <div>
      {state?.cartProducts && state?.cartProducts.map((product) => (
        <ProductCart product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Cart;
