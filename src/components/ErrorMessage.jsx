import React from 'react';

export default function ErrorMessage() {
	return (
		<div className="error">
			<div>
				<svg>
					<use href="/img/icons.svg#icon-alert-triangle"></use>
				</svg>
			</div>
			<p>No recipes found for your query. Please try again!</p>
		</div>
	);
}
