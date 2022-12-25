import { createSlice } from "@reduxjs/toolkit";

export const scoreReducer = createSlice({
    name: 'score',
    initialState: {
        gameScore: 0 
    },
    reducers: {
        setScore: (state,data) => {
            state.gameScore += data.payload
        }
    }
})


export const {setScore} = scoreReducer.actions
export const selectScore = state => state.score.gameScore

export default scoreReducer.reducer