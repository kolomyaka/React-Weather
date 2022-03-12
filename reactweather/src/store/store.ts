import { combineReducers, compose, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import currentWeatherSliceReducer from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
    currentWeatherSliceReducer
});

export const store = configureStore({
    reducer : rootReducer,
    devTools : true,
    middleware : ((getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}))
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
