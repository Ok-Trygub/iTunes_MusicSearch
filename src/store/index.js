import {configureStore} from '@reduxjs/toolkit';
import {iTunesApi} from './slices/iTunesApi';

export default configureStore({
    reducer: {
        [iTunesApi.reducerPath]: iTunesApi.reducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(iTunesApi.middleware)
    }
})