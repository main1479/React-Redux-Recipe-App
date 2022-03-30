import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';
import searchReducer from './searchSlice';
import bookmarkReducer from './bookmarkSlice';
import { recipeAPI } from '../services/apiServices';

export const store = configureStore({
	reducer: {
		[recipeAPI.reducerPath]: recipeAPI.reducer,
		recipe: recipeReducer,
		search: searchReducer,
		bookmarks: bookmarkReducer,
	},
});
