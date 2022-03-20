import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice';
import weeklyWeatherSliceReducer from './slices/weeklyWeatherSlice';
import popupSlices from "./slices/popupSlices";


const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    weeklyWeatherSliceReducer,
    popupSlices,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }))
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
