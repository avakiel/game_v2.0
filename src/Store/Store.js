import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './SettingsReducer'
import playersReducer from './PlayersReducer'
import gameReducer from './GameReducer'
import fameReducer from './FameReducer'

export default configureStore({
    reducer: {
        settings: settingsReducer,
        players: playersReducer,
        game: gameReducer,
        fame: fameReducer,
    }
})