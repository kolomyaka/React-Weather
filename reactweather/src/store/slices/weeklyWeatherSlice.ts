import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { WeeklyWeather } from "../types/types"
import { Response } from "./currentWeatherSlice"


type WeeklyWeatherType = {
    weeklyWeather : WeeklyWeather
    isLoading : boolean
    response : Response
}

const initialState: WeeklyWeatherType = {
    weeklyWeather : {
        daily : [{
            temp: {
                day : 0,
                night : 0,
            },
            feels_like : {
                day : 0
            },
            wind_deg : 0,
            wind_speed : 0,
            dt : 0,
            weather : []

        }],
    },
    isLoading : false,
    response : {
        status : 0,
        message : ''
    }
}

// Создаем slice

export const weeklyWeatherSlice = createSlice({
    name : 'weeklyWeather',
    initialState,
    reducers : {
        fetchWeeklyWeather(state) {
            state.isLoading = true;
        },
        fetchWeeklySuccess(state, action: PayloadAction<AxiosResponse<WeeklyWeather>>) {
            state.weeklyWeather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status : action.payload.status,
                message : action.payload.statusText
            }
        },
        fetchWeeklyWeatherError(state, action: PayloadAction<AxiosResponse<WeeklyWeather>>) {
            state.isLoading = false;
            state.response = {
                status : action.payload.status,
                message : action.payload.statusText
            }
        }
    }
});

export default weeklyWeatherSlice.reducer;