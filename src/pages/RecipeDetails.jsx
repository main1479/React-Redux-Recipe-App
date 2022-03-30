import { useEffect, useState } from 'react';
import Message from '../components/Message';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import RecipeBanner from '../components/RecipeBanner';
import RecipeFooter from '../components/RecipeFooter';
import Ingredient from '../components/Ingredient';
import { useGetRecipeQuery } from '../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipe } from '../store/recipeSlice';
import { toggleBookmark } from '../store/recipeSlice';
import { handleBookmark } from '../store/bookmarkSlice';

export default function RecipeDetails() {
	const [recipeId, setRecipeId] = useState(window.location.hash.slice(1));
	const bookmarks = useSelector((state) => state.bookmarks);
	const { data, error, isLoading } = useGetRecipeQuery(recipeId);
	const recipe = useSelector((state) => state.recipe);
	const [servings, setServings] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			setServings(data.data.recipe.servings);
			dispatch(setRecipe(data.data.recipe));
			const index = bookmarks.findIndex((el) => el.id === recipeId);
			if (index > -1) {
				dispatch(toggleBookmark());
			}
		}
		window.addEventListener('hashchange', () => {
			setRecipeId(window.location.hash.slice(1));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, dispatch]);

	if (!recipeId) return <Message />;
	if (error) return <ErrorMessage error={error} />;
	if (isLoading) return <LoadingSpinner />;

	const updateServings = (type) => {
		if (type === 'decrease') {
			if (servings === 1) return;
			setServings(servings - 1);
		} else {
			setServings(servings + 1);
		}
	};

	return (
		<>
			{recipe.title && (
				<>
					<RecipeBanner title={recipe.title} image={recipe.image_url} />

					<div className="recipe__details">
						<div className="recipe__info">
							<svg className="recipe__info-icon">
								<use href="/img/icons.svg#icon-clock"></use>
							</svg>
							<span className="recipe__info-data recipe__info-data--minutes">
								{recipe.cooking_time}
							</span>
							<span className="recipe__info-text">minutes</span>
						</div>
						<div className="recipe__info">
							<svg className="recipe__info-icon">
								<use href="/img/icons.svg#icon-users"></use>
							</svg>
							<span className="recipe__info-data recipe__info-data--people">{servings}</span>
							<span className="recipe__info-text">servings</span>

							<div className="recipe__info-buttons">
								<button
									className="btn--tiny btn--increase-servings"
									onClick={() => updateServings('decrease')}
								>
									<svg>
										<use href="/img/icons.svg#icon-minus-circle"></use>
									</svg>
								</button>
								<button
									className="btn--tiny btn--increase-servings"
									onClick={() => updateServings('increase')}
								>
									<svg>
										<use href="/img/icons.svg#icon-plus-circle"></use>
									</svg>
								</button>
							</div>
						</div>

						<div className="recipe__user-generated">
							<svg>
								<use href="/img/icons.svg#icon-user"></use>
							</svg>
						</div>
						<button
							className="btn--round"
							onClick={() => {
								dispatch(toggleBookmark());
								dispatch(handleBookmark([recipe]));
							}}
						>
							<svg className="">
								<use href={`/img/icons.svg#icon-bookmark${recipe.bookmarked ? '-fill' : ''}`}></use>
							</svg>
						</button>
					</div>

					<div className="recipe__ingredients">
						<h2 className="heading--2">Recipe ingredients</h2>
						<ul className="recipe__ingredient-list">
							{recipe.ingredients.map((ingredient, i) => (
								<Ingredient
									{...ingredient}
									newServings={servings}
									servings={recipe.servings}
									key={ingredient.description + i}
								/>
							))}
						</ul>
					</div>

					<RecipeFooter publisher={recipe.publisher} sourceUrl={recipe.source_url} />
				</>
			)}
		</>
	);
}
