import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css';

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			console.log(
				setMovie(
					request.data.results[
						Math.floor(Math.random() * request.data.results.length - 1)
					]
				)
			);
		};

		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
        https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
      )`,
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>
				<h1 className="banner_description">{truncate(movie?.overview, 155)}</h1>
			</div>
			<div className="banner_fadeBottom"></div>
		</header>
	);
};

export default Banner;
