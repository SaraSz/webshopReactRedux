import React from 'react';

function ListView(props) {
	let i=0;
	const list = props.items.map( x => <li key={i++}>{x}</li> )
	return (
		<ul>{list}</ul>
	);
}

export default ListView;