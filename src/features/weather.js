import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {value: []},
    reducers: {
        search: (state, action) => {
            state.value = action.payload
        }
    }
});

export const searchWeather =  weatherSlice.actions;
export default weatherSlice.reducer