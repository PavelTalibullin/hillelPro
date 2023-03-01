import Card from '../Card/Card'
import './App.css'

const cardData = {
	url: "https://assets.ithillel.ua/images/blog/cover/_transform_blogCard_2x/Hillel-Blog-BusinessAnalysis.jpg",
	title: "UX Design: How To Implement Usability Testing",
	author: "Alfredo Rhiel Madsen",
	students: 500,
	level:"Beginner",
	rating:4.5,
	duration: 1.5,
	modules:5,
}

function App () {
	return(
		<div className='container'>
			<Card data={cardData}></Card>
		</div>
	);
}

export default App;