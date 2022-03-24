import { AxiosResponse } from 'axios';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Response } from "./currentWeatherSlice"

type TenDaysWeatherType = {
    tenDaysWeather : any
    isLoading: boolean
    response: Response
}

const initialState: TenDaysWeatherType = {
    tenDaysWeather : {},
    isLoading : false,
    response : {
        status : 0,
        message : ''
    }
}

export const tenDaysWeather = createSlice({
    name: 'tenDaysWeather',
    initialState,
    reducers: {
        fetchTenDaysWeather(state) {
            state.isLoading = true;
        },
        fetchTenDaysWeatherSuccess(state, action: PayloadAction<AxiosResponse<any>>) {
            state.isLoading = false;
            state.tenDaysWeather = action.payload;
            state.response = {
                status : action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchTenDaysWeatherError(state, action: PayloadAction<AxiosResponse<any>>) {
            state.isLoading = true;
            state.response = {
                status : action.payload.status,
                message : action.payload.statusText
            }
        }
    }
})

export default tenDaysWeather.reducer;