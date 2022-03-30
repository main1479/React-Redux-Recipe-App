import React from 'react';

export default function LoadingSpinner() {
	return (
		<div className="spinner">
			<svg>
				<use href="/img/icons.svg#icon-loader"></use>
			</svg>
		</div>
	);
}
