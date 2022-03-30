import React from 'react';

export default function Pagination() {
	return (
		<div className="pagination">
			<button className="btn--inline pagination__btn--prev">
				<svg className="search__icon">
					<use href="/img/icons.svg#icon-arrow-left"></use>
				</svg>
				<span>Page 1</span>
			</button>
			<button className="btn--inline pagination__btn--next">
				<span>Page 3</span>
				<svg className="search__icon">
					<use href="/img/icons.svg#icon-arrow-right"></use>
				</svg>
			</button>
		</div>
	);
}
