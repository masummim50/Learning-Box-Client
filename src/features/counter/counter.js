import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:'count',
    initialState,
    reducers: {
        increment: (state, action)=> {
            state.count++;
        }
    }
});

export default counterSlice.reducer;
export const {increment} = counterSlice.actions;