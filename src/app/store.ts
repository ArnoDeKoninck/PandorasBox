import {configureStore} from "@reduxjs/toolkit"
import partyReducer from "../features/partySlice"
import enemyReducer from "../features/enemySlice"
import combatTurnReducer from "../features/combatTurnSlice"
import achievementsReducer from "src/features/achievementSlice"

export const store = configureStore({
    reducer: {
      party: partyReducer,
      enemies: enemyReducer,
      combatTurn: combatTurnReducer,
      achievements: achievementsReducer, 
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
