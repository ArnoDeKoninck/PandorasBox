import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const localStorageCache = localStorage.getItem('combatTurn');
const cachedCombatTurn =  localStorageCache? parseInt(JSON.parse(localStorageCache)): 0;

const combatTurnSlice = createSlice({
    name: 'combatTurn',
    initialState: cachedCombatTurn,
    reducers: {
        updateCombatTurn(state, action:PayloadAction<number>){
           localStorage.setItem('combatTurn', JSON.stringify(action.payload))
           return action.payload
          
        }
    }
})

export const { updateCombatTurn} = combatTurnSlice.actions;
export default combatTurnSlice.reducer;