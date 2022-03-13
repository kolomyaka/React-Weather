import { RootState } from './store';


export const selectCurrentWeatherData = (state: RootState) =>  state.currentWeatherSliceReducer;

export const selectCurrentWindDirection = (state: RootState) => state.currentWeatherSliceReducer.weather.wind.deg;

export const selectCurrentPressure = (state: RootState) => state.currentWeatherSliceReducer.weather.main.pressure;

export const selectWeeklyWeatherData = (state :RootState) => state.weeklyWeatherSliceReducer;