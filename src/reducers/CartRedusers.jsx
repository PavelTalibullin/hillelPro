export const shopReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
	  case "ADD_TO_CART":
		 return { cartProducts: [...state.cartProducts, payload] };

	  case "REMOVE_FROM_CART":
		 const filteredProducts = state.cartProducts.filter(
			(product) => product.id !== payload
		 );
		 return {
			cartProducts: filteredProducts,
		 };

	  default:
		 return state;
	}
 };

 export const initialState = {
	cartProducts: [],
 };