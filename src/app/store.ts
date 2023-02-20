import {configureStore} from "@reduxjs/toolkit"
import partyReducer from "../features/partySlice"
import enemyReducer from "../features/enemySlice"

export const store = configureStore({
    reducer: {
        party: partyReducer,
        enemies: enemyReducer


    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;