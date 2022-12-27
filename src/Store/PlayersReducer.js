import { createSlice } from "@reduxjs/toolkit";

export const playersReducer = createSlice({
    name: 'players',
    initialState: {
        allPlayers: []
    },
    reducers: {
        pushPlayer: (state,data) => {
            return {allPlayers:[...state.allPlayers, 
                {
                name:data.payload,
                ReadySettings: true
            }
        ]}
        },
        refreshPlayer: (state) => {
            state.allPlayers = []
        }
    }
})

export const {pushPlayer, refreshPlayer} = playersReducer.actions

export const selectPlayers = state => state.players.allPlayers

export default playersReducer.reducer