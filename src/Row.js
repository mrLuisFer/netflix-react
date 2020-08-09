import React, { useState, useEffect } from 'react';
import axios from './axios';

import './row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			console.log(request);
			return request;
		};

		fetchData();
	}, [fetchUrl]);

	console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies.map((movie) => (
					<img
						loading="lazy"
						key={movie.id}
						className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Row;
