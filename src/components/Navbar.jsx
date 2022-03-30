import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
	const bookmarks = useSelector((state) => state.bookmarks);
	const [recipeId, setRecipeId] = useState(window.location.hash.slice(1));
	useEffect(() => {
		window.addEventListener('hashchange', () => {
			setRecipeId(window.location.hash.slice(1));
		});
	}, [recipeId]);
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<button className="nav__btn nav__btn--add-recipe">
						<svg className="nav__icon">
							<use href="/img/icons.svg#icon-edit"></use>
						</svg>
						<span>Add recipe</span>
					</button>
				</li>
				<li className="nav__item">
					<button className="nav__btn nav__btn--bookmarks">
						<svg className="nav__icon">
							<use href="/img/icons.svg#icon-bookmark"></use>
						</svg>
						<span>Bookmarks</span>
					</button>
					<div className="bookmarks">
						<ul className="bookmarks__list">
							{bookmarks.length < 1 && (
								<div className="message">
									<div>
										<svg>
											<use href="/img/icons.svg#icon-smile"></use>
										</svg>
									</div>
									<p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
								</div>
							)}

							{bookmarks.map((bookmark, i) => (
								<li className="preview" key={bookmark.id + i}>
									<a
										className={`preview__link ${
											recipeId === bookmark.id ? 'preview__link--active' : ''
										}`}
										href={`#${bookmark.id}`}
									>
										<figure className="preview__fig">
											<img src={bookmark.image_url} alt={bookmark.title} />
										</figure>
										<div className="preview__data">
											<h4 className="preview__title">{bookmark.title}</h4>
											<p className="preview__publisher">{bookmark.publisher}</p>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
				</li>
			</ul>
		</nav>
	);
}
