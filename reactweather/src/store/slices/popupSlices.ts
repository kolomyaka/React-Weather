import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    wind: 0,
    icon: '',
}


// Создаем slice
export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {

    }
})