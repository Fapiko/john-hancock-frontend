import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { ROUTE_KEY_NEW } from '../../consts/routes';
import { Link } from 'react-router-dom';

const Keys = () => {
	const [keys, setKeys] = useState([]);
	const sessionData = localStorage.getItem('session');

	useEffect(() => {
		const session = JSON.parse(sessionData);

		axios
			.get(process.env.REACT_APP_PLATFORM_PATH + '/keys', {
				headers: {
					Authorization: session.id,
				},
			})
			.then((response) => {
				setKeys(response.data);
			});
	}, [sessionData]);

	return (
		<div>
			<h1>Keys</h1>
			<ul>
				{keys.map((key) => (
					<li key={key.id}>{key.name}</li>
				))}
			</ul>
			<Link to={ROUTE_KEY_NEW}>
				<Button variant="contained">Create</Button>
			</Link>
		</div>
	);
};

export default Keys;