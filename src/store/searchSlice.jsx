import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	query: '',
	results: [],
	page: 1,
	resultsPerPage: 10,
	loading: false,
	isError: null,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		loadSearch: (state, action) => {
			state.error = action.payload.error;
			state.loading = action.payload.isLoading;
			if (action.payload.results) {
				state.results = [...action.payload.results];
			}

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { loadSearch } = searchSlice.actions;

export default searchSlice.reducer;
