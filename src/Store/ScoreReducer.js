import { createSlice } from "@reduxjs/toolkit";

export const scoreReducer = createSlice({
    name: 'score',
    initialState: {
        gameScore: 0 
    },
    reducers: {
        setScore: (state,data) => {
            state.gameScore += data.payload
        },
        refreshScore: (state) => {
            state.gameScore = 0
        }
    }
})


export const {setScore, refreshScore} = scoreReducer.actions
export const selectScore = state => state.score.gameScore

export default scoreReducer.reducer