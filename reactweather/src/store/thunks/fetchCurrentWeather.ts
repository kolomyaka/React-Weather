import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from "../../services/WeatherService";
import { AppDispatch } from "../store";


// Создаем thunk которая возвращает функцию, в которой замыкается payload(Город) и внутри которой можем вызвать dispatch.

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather());   // При запросе устанавливаем флаг загрузки в активное состояние
        const res = await WeatherService.getCurrentWeather(payload);

        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (error) {
        console.log(error);
    }




}