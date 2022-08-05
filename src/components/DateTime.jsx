import React, { useState, useEffect } from 'react';

const DateTime = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	});

	return (
		<div>
			<p>
				<b>Time:</b> {date.toLocaleTimeString()}
			</p>
			<p>
				<b>Date:</b> {date.toLocaleDateString()}
			</p>
		</div>
	);
};

export default DateTime;
