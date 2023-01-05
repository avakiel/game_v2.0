import { createSlice } from "@reduxjs/toolkit";

export const playersReducer = createSlice({
    name: 'players',
    initialState: {
        player: '',
        score: '',
        confirmSettings: false
    },
    reducers: {
        pushPlayer: (state,data) => {
           state.player = data.payload
           state.confirmSettings = true
           state.score = 0
        },
        playerScore: (state, data) => {
            state.score += data.payload
        },
        refreshPlayer: (state) => {
            state.confirmSettings = false
            state.player = ''
            state.score = ''
        }
    }
})

export const {pushPlayer, playerScore, refreshPlayer} = playersReducer.actions

export const selectPlayers = state => state.players

export default playersReducer.reducer