import { createSlice, PayloadAction } from '@reduxjs/toolkit'




const initialState = {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    wind_speed: 0,
    wind_deg: 0,
    icon: '',
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
        setCurrentData(state, action: PayloadAction<any>) {
            state.temp = action.payload.day
            state.feels_like = action.payload.feels_like
            state.pressure = action.payload.pressure
            state.wind_speed = action.payload.wind_speed
            state.wind_deg = action.payload.wind_deg
            state.icon = action.payload.icon

        }
    }
})

export const { toggleVision, hideVision, setCurrentData } = popupSlice.actions;
export default popupSlice.reducer