function ListItem(props) {
	let boldFirst = props.boldFirst ? props.boldFirst : "mb-2";
	return <li className={boldFirst}>{props.value}</li>
}

function list(props) {
	const ListItems = props.items.map((item, index) => {
		return <ListItem key={index} value={item}></ListItem>
	})
	return (
		<ul className="list-disc list-inside mb-4 md:mb-8 xl:mb-12">
			{ListItems}
		</ul>
	)
}

export default list;