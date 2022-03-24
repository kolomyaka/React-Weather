import { weeklyWeatherSlice } from './../slices/weeklyWeatherSlice';
import { AppDispatch } from "../store";
import { WeatherService } from '../../services/WeatherService';

export const fetchWeeklyWeather = (lat:number, lon: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeather());
        const res = await WeatherService.getWeeklyWeather(lat, lon);

        if (res.status === 200) {
            dispatch(weeklyWeatherSlice.actions.fetchWeeklySuccess(res));
        } else {
            dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeatherError(res));
        }
        
    } catch (error) {
        console.log(error);
    }
}