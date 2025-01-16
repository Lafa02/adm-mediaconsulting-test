import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
        query: (params) => ({
            url: "/people",
            params
        }),
        transformResponse: (response) => {
            return {
                ...response,
                results: response.results.map((person) => ({
                    ...person,
                    homeworld: person.homeworld.split("/").reverse()[1],
                })),
            };
        }
    }),
    getPlanetById: builder.query({
        query: (id) => ({ url: `/planets/${id}` }),
    }),
  }),
});

export default api;
