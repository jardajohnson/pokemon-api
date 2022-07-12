import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeList = (props) => {
	const [pokes, setPokes] = useState([]);
	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
			.then((response) => {
				setPokes(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<ul>
			<h1>Pokemon</h1>
			{/* {JSON.stringify(pokes)} */}
			{pokes.map((poke, index) => {
				return (
					<li key={index}>
						# {index + 1}: {poke.name}
					</li>
				);
			})}
		</ul>
	);
};

export default PokeList;
