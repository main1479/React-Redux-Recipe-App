import { Fraction } from 'fractional';
import React from 'react';

export default function Ingredient({ quantity, unit, description, servings, newServings }) {
	return (
		<li className="recipe__ingredient">
			<svg className="recipe__icon">
				<use href="/img/icons.svg#icon-check"></use>
			</svg>
			{quantity && (
				<div className="recipe__quantity">
					{new Fraction((quantity * newServings) / servings).toString()}
				</div>
			)}
			<div className="recipe__description">
				<span className="recipe__unit"> {unit} </span>
				{description}
			</div>
		</li>
	);
}
