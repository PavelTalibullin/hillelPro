import { useState, useEffect} from "react";
import Product from "../../components/Product/Product";
import ReduxCounter from "../../components/ReduxCounter";

import styles from './Home.module.scss'


const Home = () => {
	// const [products, setProducts] = useState([]);


// 	useEffect(() => {

// 		const getAllProducts = async () => {
// 			const res = await fetch("https://6411ead7f9fe8122ae17b7ea.mockapi.io/products")
// 			const data = await res.json();
// 			setProducts(data)
// 		}

// 		getAllProducts();
// 	}, [])

//   return (
//     <div className={styles.Grid}>
//       {products && products?.map((product) => (
//         <Product product={product} key={product.id} />//props product в который кладем product. ТО есть объкт shopData будет доступен по пропсу product. 
//       ))}
//     </div>
//   );


return (
	<div>
		<ReduxCounter/>
	</div>
)
};

export default Home;
