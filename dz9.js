const data = [
	{
	  id: 1,
	  name: "Invicta Men's Pro Diver",
	  img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
	  price: 74,
	  category: "Dress",
	},
	{
	  id: 11,
	  name: "Invicta Men's Pro Diver 2",
	  img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
	  price: 74,
	  category: "Dress",
	},
	{
	  id: 2,
	  name: "Timex Men's Expedition Scout ",
	  img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
	  price: 40,
	  category: "Sport",
	},
	{
	  id: 3,
	  name: "Breitling Superocean Heritage",
	  img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
	  price: 200,
	  category: "Luxury",
	},
	{
	  id: 4,
	  name: "Casio Classic Resin Strap ",
	  img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
	  price: 16,
	  category: "Sport",
	},
	{
	  id: 5,
	  name: "Garmin Venu Smartwatch ",
	  img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
	  price: 74,
	  category: "Casual",
	},
 ];
 
 const productsWrapper = document.querySelector('.products');
 const searchInput = document.querySelector(".search");
 const categories = document.querySelector(".categories");
 const priceRange = document.querySelector(".priceRange");
 const priceValue = document.querySelector(".priceValue");
 
 const displayProducts = (arrayOfProducts) => {
	 
	 const productStr = arrayOfProducts.map(product => `
		 <div class="product">
			 <img src="${product.img}" alt="" />
			 <span class="name">${product.name}</span>
			 <span class="priceText">${product.price}</span>
		 </div>
	 `).join("")
 
	 productsWrapper.innerHTML = productStr;
 }
 displayProducts(data)
 
 searchInput.addEventListener("keyup", (event) => {
	 const value = event.target.value.toLowerCase()
 
	 if(value) {
 const filteredArray = data.filter(item => item.name.toLowerCase().includes(value))
 displayProducts(filteredArray)
	 } else [
		 displayProducts(data)
	 ]
 })
 
 const setCategories = () => {
	 const allCategories = data.map(product => product.category);
 
	 const filteresCategories = allCategories.filter(
		 (item, index) => allCategories.indexOf(item) === index
	 );
	 
	 categories.innerHTML = filteresCategories.map(category => `<span class="category">${category}</span>`).join("")
		 
	 categories.addEventListener("click", (event) => {
		 const selectedCategory = event.target.textContent;
		 
		 
		 if (selectedCategory) {
 
			 const sortedProductsCategory = data.filter(product => product.category === selectedCategory)
			 displayProducts(sortedProductsCategory);
		 } else {
			 displayProducts(data);
		 }
	 })
 
 };
 
 setPrices = () => {
	 const priceList = data.map(product => product.price)
 
	 const minPrice = Math.min(...priceList)
	 const maxPrice = Math.max(...priceList)
 
	 priceRange.min = minPrice
	 priceRange.max = maxPrice
	 priceRange.value = maxPrice
	 priceRange.step = 10
	 
	 priceValue.textContent = `$${maxPrice}`
 
	 priceRange.addEventListener('input', (event) => {
		 const value = event.target.value;
		 priceValue.textContent = `$${value}`
 
		 const filteredArray = data.filter(product => product.price <= value)
		 displayProducts(filteredArray)
	 })
 }
 
 setCategories();
 setPrices();