import { WeatherService } from "../../services/WeatherService";
import { tenDaysWeatherSlice } from "../slices/TenDaysWeatherSlice"
import { AppDispatch } from "../store"




export const fetchTenDaysWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(tenDaysWeatherSlice.actions.fetchTenDaysWeather());
        
        const res = await WeatherService.getTenDaysWeather(payload);

        // Проверяем статус нашего запроса
        if (res.status === 200) {
            dispatch(tenDaysWeatherSlice.actions.fetchTenDaysWeatherSuccess(res))
        } else {
            dispatch(tenDaysWeatherSlice.actions.fetchTenDaysWeatherError(res))
        }
    } catch (error) {
        console.log(error);
    }
}