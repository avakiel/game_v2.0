import { createSlice } from "@reduxjs/toolkit";

export const gameReducer = createSlice({
    name: 'game',
    initialState: {
        flashRandom: [],
        flashCheck: [],
        gameReady: false,
    },
    reducers:{
        setGameReady: (state,data) => {
            state.gameReady = data.payload
        },
        setFlashRandom: (state, data) => {
            state.flashRandom = [...data.payload]
        },
        refreshGame: (state) => {
            state.flashCheck = []
            state.flashRandom = []
            state.gameReady = false
        }
    }
})

export const { setFlashRandom, setGameReady, refreshGame} = gameReducer.actions

export const selectGameState = state => state.game
export const selectFlashRandom = state => state.game.flashRandom
export const selectFlashCheck = state => state.game.flashCheck

export default gameReducer.reducer