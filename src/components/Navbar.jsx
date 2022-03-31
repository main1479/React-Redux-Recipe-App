import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const bookmarks = useSelector((state) => state.bookmarks);
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
									<NavLink className="preview__link" to={`/${bookmark.id}`}>
										<figure className="preview__fig">
											<img src={bookmark.image_url} alt={bookmark.title} />
										</figure>
										<div className="preview__data">
											<h4 className="preview__title">{bookmark.title}</h4>
											<p className="preview__publisher">{bookmark.publisher}</p>
										</div>
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</li>
			</ul>
		</nav>
	);
}
