import React from 'react';
import { useState, useEffect } from 'react';

const colors = [
	'#845EC2',
	'#D65DB1',
	'#FF6F91',
	'#FF9671',
	'#FFC75F',
	'#F9F871',
];

const getRandomElement = (arr) => {
	const indexRandom = Math.floor(Math.random() * arr.length);
	return arr[indexRandom];
};

const LoadingScreen = () => {
	const [bgImage, setbgImage] = useState();

	useEffect(() => {
		const randomColor = getRandomElement(colors);
		setbgImage(randomColor);
	}, []);

	return (
		<div className="card__load" style={{ color: bgImage }}>
			<h1>Loading...</h1>
		</div>
	);
};

export default LoadingScreen;
