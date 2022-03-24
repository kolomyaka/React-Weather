import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { Response } from "./currentWeatherSlice"


type MonthWeatherType = {
    monthWeather: any
    isLoading: boolean
    response: Response
}

const initialState: MonthWeatherType = {
    monthWeather: {},
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const monthWeatherSlice = createSlice({
    name: 'monthWeather',
    initialState,
    reducers: {
        fetchMonthWeather(state) {
            state.isLoading = true;
        },
        fetchMonthWeatherSuccess(state, action: PayloadAction<AxiosResponse<any>>) {
            state.isLoading = false;
            state.monthWeather = action.payload;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchMonthWeatherError(state, action: PayloadAction<AxiosResponse<any>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default monthWeatherSlice.reducer;