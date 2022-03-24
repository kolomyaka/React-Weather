import { WeatherService } from "../../services/WeatherService";
import { tenDaysWeather } from "../slices/TenDaysWeatherSlice"
import { AppDispatch } from "../store"




export const fetchTenDaysWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(tenDaysWeather.actions.fetchTenDaysWeather());
        console.log('hey');
        
        const res = await WeatherService.getTenDaysWeather(payload);

        // Проверяем статус нашего запроса
        if (res.status === 200) {
            dispatch(tenDaysWeather.actions.fetchTenDaysWeatherSuccess(res))
        } else {
            dispatch(tenDaysWeather.actions.fetchTenDaysWeatherError(res))
        }
    } catch (error) {
        console.log(error);
    }
}