import { createSlice } from "@reduxjs/toolkit";

export const settingsReducer = createSlice({
    name: 'settings',
    initialState: {
        speedValue: 0,
        countValue: 0,
        confirmSettings: false,
        difficulty: 0
    },
    reducers: {
        setSettings: (state, data) => {
            state.countValue = data.payload.count
            state.speedValue = data.payload.speed
            state.confirmSettings = data.payload.confirm
        },
        setCount: (state,data) => {
            state.countValue = data.payload
        },
        setSpeed: (state,data) => {
            state.speedValue = data.payload
        },
        setConfirm: (state,data) => {
            state.confirmSettings = data.payload
        },
        setDifficulty: (state, data) => {
            state.difficulty = data.payload
        },
        refreshSettings: (state) => {
            state.speedValue = 0
            state.countValue = 0
            state.confirmSettings = false
            state.difficulty = 0
        }
    }
})

export const {setSettings, refreshSettings, setCount, setSpeed, setConfirm, setDifficulty } = settingsReducer.actions

export const selectSettings = state => state.settings
export const selectSpeedValue = state => state.settings.speedValue
export const selectCountValue = state => state.settings.countValue
export const selectCheckSetup = state => state.settings.checkSetup

export default settingsReducer.reducer