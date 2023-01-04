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
                ReadySettings: true,
                score: 0
            }
        ]}
        },
    }
})

export const {pushPlayer} = playersReducer.actions

export const selectPlayers = state => state.players.allPlayers

export default playersReducer.reducer