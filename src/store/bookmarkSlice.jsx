import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const bookmarkSlice = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		handleBookmark: (state, action) => {
			if (!action.payload.bookmarked) {
				state = [...state, ...action.payload];
				localStorage.setItem('bookmarks', JSON.stringify(state));
				return state;
			} else {
				state = state.filter((el) => el.id !== action.payload.id);
				localStorage.setItem('bookmarks', JSON.stringify(state));
				return state;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { handleBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
