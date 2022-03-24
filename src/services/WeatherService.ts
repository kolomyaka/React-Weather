import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather, WeeklyWeather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`weather?q=${city}&units=metric&lang=ru`);
    }
    static getWeeklyWeather(lat: number, lon: number): Promise<AxiosResponse<WeeklyWeather>> {
        return api.get<WeeklyWeather>(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&lang=ru`)
    }
    static getMonthWeather(lat: number, lon: number): Promise<AxiosResponse<any>> {
        return api.get<any>(`/forecast/climate?lat=${lat}&lon=${lon}&units=metric&lang=ru`)
    }
}