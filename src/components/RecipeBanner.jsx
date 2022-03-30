import React from 'react';

export default function RecipeBanner({ title, image }) {
	return (
		<figure className="recipe__fig">
			<img src={image} alt={title} className="recipe__img" />
			<h1 className="recipe__title">
				<span>{title}</span>
			</h1>
		</figure>
	);
}
