import AddRecipe from './components/AddRecipe';
import Navbar from './components/Navbar';
import RecipeDetails from './pages/RecipeDetails';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import { useDispatch } from 'react-redux';
import { handleBookmark } from './store/bookmarkSlice';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Message from './components/Message';

function App() {
	const dispatch = useDispatch();
	const [fetched, setFetched] = useState(false);
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
					<Link to="/">
						<img src="/img/logo.png" alt="Logo" className="header__logo" />
					</Link>
					<Searchbar />
					<Navbar />
				</header>

				<SearchResults />
				<div className="recipe">
					{!fetched && <Message />}
					<Routes>
						<Route path="/:id" element={<RecipeDetails setFetched={setFetched} />} />
					</Routes>
				</div>
			</div>
			<AddRecipe />
		</div>
	);
}

export default App;
