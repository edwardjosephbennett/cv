function tagline(props) {
	return <h3 className="font-serif text-3xl text-red-500 mb-4">
		<span className="text-sm mb-2 inline-block p-2 rounded-md font-semibold bg-red-500 text-white">{props.tagline}</span>
		<span className="block text-black">{props.header}</span>
	</h3>
}
export default tagline;