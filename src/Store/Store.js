import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './SettingsReducer'
import playersReducer from './PlayersReducer'
import scoreReducer from './ScoreReducer'
import gameReducer from './GameReducer'
import fameReducer from './FameReducer'

export default configureStore({
    reducer: {
        settings: settingsReducer,
        players: playersReducer,
        score: scoreReducer,
        game: gameReducer,
        fame: fameReducer,
    }
})