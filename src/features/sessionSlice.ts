import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Module } from 'module'
import { Encounter, Encounter_Variant } from 'src/types/EncounterTypes';
import { Entity, SessionData, ViewModules } from '../types/GlobalTypes'

const initialSessionState: SessionData ={
    combat: [],
    combatTurn: 0,
    currentModule: ViewModules.COMBAT,
    encounter: undefined,
    enemies: [],
    enemyIndex: 0,
    party:[],
    partyLevel:1

}

interface SessionProperty {
    property: "combat" | "combatTurn" | "currentModule" | "encounter" | "enemies" | "enemyIndex" | "party" | "partyLevel";
    value: number | Entity[] | ViewModules | undefined | Encounter | Encounter_Variant
}

const sessionSlice = createSlice({
    name: 'sessionData',
    initialState: initialSessionState,
    reducers: {
        updateSession(state, action: PayloadAction<SessionProperty>){
           state = {...state, [action.payload.property]: action.payload.value }
        }
        
    }
})

export const {} = sessionSlice.actions;
export default sessionSlice.reducer;