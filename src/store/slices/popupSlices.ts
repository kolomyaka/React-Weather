import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
    temp: number
    feels_like: number
    pressure: number
    wind_speed: number
    wind_deg: number
    icon: string
    todayName: string
    todayDate: string
    currentCity?: string
    isVisible?: boolean
}


const initialState: InitialStateType = {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    wind_speed: 0,
    wind_deg: 0,
    icon: '',
    todayName: '',
    todayDate: '',
    currentCity: 'Санкт-Петербург',
    isVisible: false,
}


// Создаем slice
export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        toggleVision(state) {
            state.isVisible = true;
        },
        hideVision(state) {
            state.isVisible = false;
        },
        setCurrentData(state, action: PayloadAction<InitialStateType>) {
            state.temp = action.payload.temp
            state.feels_like = action.payload.feels_like
            state.pressure = action.payload.pressure
            state.wind_speed = action.payload.wind_speed
            state.wind_deg = action.payload.wind_deg
            state.icon = action.payload.icon
            state.todayDate = action.payload.todayDate
            state.todayName = action.payload.todayName
        },
        setCurrentCity(state, action: PayloadAction<string>) {
            state.currentCity = action.payload
        }
    }
})

export const { toggleVision, hideVision, setCurrentData, setCurrentCity } = popupSlice.actions;
export default popupSlice.reducer