import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const bookmarkSlice = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		handleBookmark: (state, action) => {
			const index = state.findIndex((el) => el.id === action.payload[0].id);
			if (index < 0) {
				state = [...state, ...action.payload];
			} else {
				state = state.filter((el) => el.id !== action.payload[0].id);
			}
			localStorage.setItem('bookmarks', JSON.stringify(state));
			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { handleBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
