import AddRecipe from './components/AddRecipe';
import Navbar from './components/Navbar';
import RecipeDetails from './pages/RecipeDetails';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import { useDispatch } from 'react-redux';
import { handleBookmark } from './store/bookmarkSlice';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const getLocalStorage = function () {
			const data = JSON.parse(localStorage.getItem('bookmarks'));
			if (!data || data.length === 0) return;
			dispatch(handleBookmark(data));
		};

		getLocalStorage();
	}, [dispatch]);
	return (
		<div className="App">
			<div className="container">
				<header className="header">
					<img src="/img/logo.png" alt="Logo" className="header__logo" />
					<Searchbar />
					<Navbar />
				</header>

				<SearchResults />
				<div className="recipe">
					<RecipeDetails />
				</div>
			</div>
			<AddRecipe />
		</div>
	);
}

export default App;
