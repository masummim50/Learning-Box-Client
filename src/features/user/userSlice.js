import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action)=> {
            return action.payload;
        },
        removeUser: (state, action)=> {
            return {};
        }
    }
})

export default userSlice.reducer;
export const {setUser, removeUser} = userSlice.actions;