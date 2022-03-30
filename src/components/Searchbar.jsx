import React, { useEffect, useState } from 'react';
import { useLoadSerchQuery } from '../services/apiServices';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';
import { loadSearch } from '../store/searchSlice';

export default function Searchbar() {
	const [input, setInput] = useState('');
	const [token, setToken] = useState(skipToken);
	const dispatch = useDispatch();
	const { data, error, isLoading } = useLoadSerchQuery(token);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!input) return;
		setToken(input);
	};
	useEffect(() => {
		dispatch(loadSearch({ error, isLoading, results: [] }));
		if (data) {
			dispatch(loadSearch({ error, isLoading, results: data.data.recipes }));
		}
	}, [data, error, isLoading, dispatch]);

	return (
		<form className="search" onSubmit={handleSubmit}>
			<input
				type="text"
				className="search__field"
				value={input}
				required
				onChange={(e) => setInput(e.currentTarget.value)}
				placeholder="Search over 1,000,000 recipes..."
			/>
			<button type="submit" className="btn search__btn">
				<svg className="search__icon">
					<use href="/img/icons.svg#icon-search"></use>
				</svg>
				<span>Search</span>
			</button>
		</form>
	);
}
