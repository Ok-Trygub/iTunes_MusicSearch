import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../utils/API_CONFIG';


export const iTunesApi = createApi({
    reducerPath: 'ITunesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),

    endpoints: (build) => ({
        getSongs: build.query({
            query: (artist) => `search?term=${encodeURI(artist).replaceAll("%20", "+")}&media=music`,
        }),
    }),
});


export const {useLazyGetSongsQuery} = iTunesApi;
