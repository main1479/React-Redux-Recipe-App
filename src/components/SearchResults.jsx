import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { paginate } from '../utils/paginate';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';

export default function SearchResults() {
	const { results, loading, isError } = useSelector((state) => state.search);
	const { resultsPerPage, page } = useSelector((state) => state.search);
	const [searched, setSearched] = useState(false);
	useEffect(() => {
		if (loading) {
			setSearched(true);
		}
	}, [results, loading, isError]);
	if (loading) return <LoadingSpinner />;
	if (isError) return <ErrorMessage />;
	return (
		<div className="search-results">
			<ul className="results">
				{results.length < 1 && searched && <ErrorMessage />}
				{results.length > 0 &&
					paginate(results, page, resultsPerPage).map((recipe, i) => (
						<li className="preview" key={recipe.id + i}>
							<NavLink className="preview__link" to={`/${recipe.id}`}>
								<figure className="preview__fig">
									<img src={recipe.image_url} alt={recipe.title} />
								</figure>
								<div className="preview__data">
									<h4 className="preview__title">{recipe.title}</h4>
									<p className="preview__publisher">{recipe.publisher}</p>
									{recipe.key && (
										<div className="preview__user-generated">
											<svg>
												<use href="/img/icons.svg#icon-user"></use>
											</svg>
										</div>
									)}
								</div>
							</NavLink>
						</li>
					))}
			</ul>

			<Pagination />

			<p className="copyright">
				&copy; Designed by
				<a
					className="twitter-link"
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/jonasschmedtman"
				>
					Jonas Schmedtmann
				</a>
				, and coded by
				<a
					className="twitter-link"
					rel="noreferrer"
					target="_blank"
					href="https://github.com/main1479"
				>
					Mainul Islam
				</a>
			</p>
		</div>
	);
}
