import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { Weather } from "../types/types"

type CurrentWeather = {
    weather : Weather
    isLoading : boolean
    response : Response
}

type Response = {
    status : number
    message : string
}

const initialState = {
    weather : {},
    isLoading : false,
    response : {
        status : 0,
        message : '',
    }
}

// Создаем slice

export const currentWeatherSlice = createSlice({
    name : 'currentWeather',
    initialState,
    reducers : {                        // Аналог switch(case) в редюсере, обычно для получения погоды необходимо было бы создавать отдельный switch в которым прописывали логику для изменения state, но не изменяя его!
        fetchCurrentWeather(state) {    // Здесь же мы можем именно изменять наш state, мутируем
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false;
            state.weather = action.payload.data;                       // В случае успешного получения ответа от сервера сохраняем данные в state.
            state.response = {
                status : action.payload.status,
                message : action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false;
            state.response = {
                status : action.payload.status,
                message : action.payload.statusText
            }
        }                
        
    }
})

export default currentWeatherSlice.reducer;