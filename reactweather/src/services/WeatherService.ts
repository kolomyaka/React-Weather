import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather, WeeklyWeather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`weather?q=${city}&units=metric&lang=ru`);
    }
    static getWeeklyWeather(): Promise<AxiosResponse<WeeklyWeather>> {
        return api.get<WeeklyWeather>(`/onecall?lat=59.8944&lon=30.2642&exclude=hourly,minutely&units=metric&lang=ru`)
    } 
}