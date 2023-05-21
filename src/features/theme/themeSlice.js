import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dark:false
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        changeTheme: (state, action)=> {
            console.log('calling dispatch')
            state.dark = !state.dark;
        }
    }
})

export default themeSlice.reducer;
export const {changeTheme} = themeSlice.actions;
