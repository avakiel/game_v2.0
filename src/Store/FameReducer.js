import { createSlice } from "@reduxjs/toolkit";


export const fameReducer = createSlice({
    

    name: 'fame',
    initialState: {
        tablet: []
    },
    reducers: {
        pushTablet: (state,payload) => {
            state.tablet.push(payload)
        }
    }
    
})

export const {pushTablet} = fameReducer.actions

export const selectTablet = state => state.fame.tablet

export default fameReducer.reducer