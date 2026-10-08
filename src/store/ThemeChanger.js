import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "light"
}

export const ThemeChangerSlice = createSlice({
    name : 'theme',
    initialState , 
    reducers :  {
        changeTheme : (state ,  action) => {
            if(state.theme === 'light') state.theme = 'dark'
            else state.theme = 'light'
        }
    }
})

export const {changeTheme} = ThemeChangerSlice.actions
export default ThemeChangerSlice.reducer