import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getClassResources } from 'src/components/ModuleSelector/CombatModule/partyInformation/ClassResource'
import { Entity } from '../types/GlobalTypes'

interface PartyState {
    members: Entity[],
    partyLevel: number,
}

const initialPartyState: PartyState = {
    members: [],
    partyLevel: 1

}

const partySlice = createSlice({
    name: 'party',
    initialState: initialPartyState,
    reducers: {
        //adding an Entity to the party.
        addPcToParty(state, action: PayloadAction<Entity>){
            //Checks if the selected PC is not already part of the party and adds them if this is not the case.
           if(!state.members.includes(action.payload)){
            action.payload.resources = getClassResources(action.payload.class!, state.partyLevel).resource;
            state.members.push(action.payload)
           }
        },
        //Removes the selected PC from the party
        removePcFromParty(state, action: PayloadAction<Entity>){
           state.members = state.members.filter((pc) => pc.name !== action.payload.name)
        },
        changePartyLevel(state, action:PayloadAction<number>){
            state.partyLevel = action.payload;
        }

    }
})

export const {addPcToParty, removePcFromParty, changePartyLevel} = partySlice.actions;
export default partySlice.reducer;