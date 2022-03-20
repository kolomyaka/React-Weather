import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    wind: 0,
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
    }
})

export const { toggleVision } = popupSlice.actions;
export default popupSlice.reducer