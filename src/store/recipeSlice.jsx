import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const recipeSlice = createSlice({
	name: 'recipe',
	initialState,
	reducers: {
		setRecipe: (state, action) => {
			return (state = action.payload);
		},
		removeRecipe: (state) => {
			return (state = {});
		},
		toggleBookmark: (state) => {
			if (state.bookmarked) state.bookmarked = false;
			else state.bookmarked = true;
			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setRecipe, removeRecipe, toggleBookmark } = recipeSlice.actions;

export default recipeSlice.reducer;
