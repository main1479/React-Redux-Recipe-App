import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeAPI = createApi({
	reducerPath: 'recipeAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://forkify-api.herokuapp.com/api/v2/recipes/' }),
	tagTypes: [],
	endpoints: (builder) => ({
		loadSerch: builder.query({
			query: (name) => `?search=${name}`,
		}),
		getRecipe: builder.query({
			query: (id) => `/${id}`,
		}),
	}),
});

export const { useLoadSerchQuery, useGetRecipeQuery } = recipeAPI;
