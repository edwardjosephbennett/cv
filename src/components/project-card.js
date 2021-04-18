function projectCard(props) {
	return (
		<a href={props.link} className="flex flex-col items-start rounded-md w-full shadow-md" target="_blank" rel="nofollow noreferrer">
			<img src={props.logo} alt={props.title} className="max-h-24 w-auto h-full"/>
			<div className="w-full p-4">
				<h3 class="font-serif font-semibold text-red-500 mb-4">{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</a>
	)
}

export default projectCard;