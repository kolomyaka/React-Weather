import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=8198639251d8dbdf8e0477a3706efc1c`);
    }
}