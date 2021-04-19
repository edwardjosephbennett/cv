import List from "./list";

function projectCard(props) {

	return (
		<a href={props.link} className="flex flex-col items-start rounded-lg w-full shadow-md" target="_blank" rel="nofollow noreferrer">
			<img src={props.logo} alt={props.title} className="max-h-24 px-4 pt-4 w-auto h-full"/>
			<div className="w-full p-4">
				<h3 className="font-serif font-semibold text-red-500 mb-4">{props.title}</h3>
				<p className="mb-4">{props.description}</p>
				<List items={props.stack}></List>
			</div>
		</a>
	)
}

export default projectCard;