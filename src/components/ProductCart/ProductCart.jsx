import { useContext } from "react";
import { ShopContext } from "../../context/CartContext";

import styles from "./ProductCart.module.scss";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl, id } = product;

  const { removeFromCart } = useContext(ShopContext);

  const handleClick = () => {
	removeFromCart(id)
  };

  return (
    <div className={styles.Product}>
      <div className={styles.Wrapper}>
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
      <button onClick={handleClick}>Delete from cart</button>
    </div>
  );
};

export default ProductCart;
