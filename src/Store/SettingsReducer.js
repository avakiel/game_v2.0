import { createSlice } from "@reduxjs/toolkit";

export const settingsReducer = createSlice({
    name: 'settings',
    initialState: {
        speedValue: 0,
        countValue: 0,
        confirmSettings: false, 
    },
    reducers: {
        plusSpeed: (state) => {
            state.speedValue++
        },
        minusSpeed: (state) => {
            state.speedValue--
        },
        plusCount: (state) => {
            state.countValue++
        },
        minusCount: (state) => {
            state.countValue--
        },
        confirmSettings: (state, data) => {
            state.confirmSettings = data.payload
        }
    }
})

export const {plusSpeed, minusSpeed, plusCount, minusCount, confirmSettings} = settingsReducer.actions

export const selectSettings = state => state.settings
export const selectSpeedValue = state => state.settings.speedValue
export const selectCountValue = state => state.settings.countValue
export const selectCheckSetup = state => state.settings.checkSetup

export default settingsReducer.reducer