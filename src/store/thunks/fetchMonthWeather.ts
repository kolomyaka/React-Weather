import { WeatherService } from "../../services/WeatherService";
import { AppDispatch } from "../store";
import { monthWeatherSlice } from './../slices/monthWeatherSlice';


export const fetchMonthWeather = (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(monthWeatherSlice.actions.fetchMonthWeather());
        const res = await WeatherService.getMonthWeather(lat, lon);
        console.log('hey');

        if (res.status === 200) {
            dispatch(monthWeatherSlice.actions.fetchMonthWeatherSuccess(res));
        } else {
            dispatch(monthWeatherSlice.actions.fetchMonthWeatherError(res))
        }
    } catch (error) {
        console.log(error);

    }
}