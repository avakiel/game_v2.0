import { createSlice } from "@reduxjs/toolkit";

export const gameReducer = createSlice({
    name: 'game',
    initialState: {
        flashRandom: [],
        flashCheck: [],
        startRandomLight: false,
        endRandomLight: false,
        gameReady: false,
        falseCount: 0,
        playerTurn: false
    },
    reducers:{
        setGameReady: (state,data) => {
            state.gameReady = data.payload
        },
        setFlashRandom: (state, data) => {
            state.flashRandom = [...data.payload]
        },
        setEndRandomLight: (state, data) => {
            state.endRandomLight = data.payload
        },
        setStartRandomLight: (state,data) => {
            state.startRandomLight = data.payload
        },
        setFalseCount: (state, data) => {
            state.falseCount = state.falseCount + data.payload
        },
        refreshCount: (state) => {
            state.falseCount = 0
        },
        setPlayerTurn: (state, data) => {
            state.playerTurn = data.payload
        }
    }
})

export const { setFlashRandom, setEndRandomLight, setGameReady, setStartRandomLight, setFalseCount, refreshCount, setPlayerTurn} = gameReducer.actions

export const selectGameState = state => state.game
export const selectFlashRandom = state => state.game.flashRandom
export const selectFlashCheck = state => state.game.flashCheck

export default gameReducer.reducer