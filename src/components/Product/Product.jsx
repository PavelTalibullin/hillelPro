import { useContext } from "react";
import { ShopContext } from "../../context/CartContext";

import styles from "./Product.module.scss";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addToCart} = useContext(ShopContext);

  const handleClick = () => {
	addToCart(product)
  };
  
  return (
    <div className={styles.Product}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
