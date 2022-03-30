import React from 'react';

export default function Message() {
	return (
		<div className="message">
			<div>
				<svg>
					<use href="/img/icons.svg#icon-smile"></use>
				</svg>
			</div>
			<p>Start by searching for a recipe or an ingredient. Have fun!</p>
		</div>
	);
}
