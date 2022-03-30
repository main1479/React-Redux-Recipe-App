import React from 'react';

export default function RecipeFooter({ publisher, sourceUrl }) {
	return (
		<div className="recipe__directions">
			<h2 className="heading--2">How to cook it</h2>
			<p className="recipe__directions-text">
				This recipe was carefully designed and tested by
				<span className="recipe__publisher"> {publisher}</span>. Please check out directions at
				their website.
			</p>
			<a className="btn--small recipe__btn" rel="noreferrer" href={sourceUrl} target="_blank">
				<span>Directions</span>
				<svg className="search__icon">
					<use href="/img/icons.svg#icon-arrow-right"></use>
				</svg>
			</a>
		</div>
	);
}
