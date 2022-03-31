import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../store/searchSlice';

export default function Pagination() {
	const dispatch = useDispatch();
	const { page, resultsPerPage, results } = useSelector((state) => state.search);
	const numPages = Math.ceil(results.length / resultsPerPage);
	const handlePaginateBtns = (type) => {
		if (type === 'next' && page < numPages) {
			dispatch(changePage(page + 1));
		}
		if (type === 'prev' && page > 1) {
			dispatch(changePage(page - 1));
		}
	};
	return (
		<div className="pagination">
			{numPages > 1 && (
				<>
					{page > 1 && (
						<button
							className="btn--inline pagination__btn--prev"
							onClick={() => handlePaginateBtns('prev')}
						>
							<svg className="search__icon">
								<use href="/img/icons.svg#icon-arrow-left"></use>
							</svg>
							<span>Page {page - 1}</span>
						</button>
					)}
					{page < numPages && (
						<button
							className="btn--inline pagination__btn--next"
							onClick={() => handlePaginateBtns('next')}
						>
							<span>Page {page + 1}</span>
							<svg className="search__icon">
								<use href="/img/icons.svg#icon-arrow-right"></use>
							</svg>
						</button>
					)}
				</>
			)}
		</div>
	);
}
