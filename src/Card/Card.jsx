import "./Card.css";

function Card(props) {
  return (
	<div>
		<a href={props.data.url}>{props.data.url}</a> <br />
		<h1>{props.data.title}</h1>
		<span>{props.data.author}</span> <br />
		<span>{props.data.students} Students</span> <br />
		<span>{props.data.modules} Modules</span> <br />
		<span>{props.data.level}</span> <br />
		<span>{props.data.duration}</span> <br />
	</div>
  );
}

export default Card;
