import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getClassResources } from 'src/components/ModuleSelector/CombatModule/partyInformation/ClassResource'
import { Entity } from '../types/GlobalTypes'

interface PartyState {
    members: Entity[],
    partyLevel: number,
}

interface UpdatePartyMember {
    index: number,
    newValues: Entity
}

const localStorageCache = localStorage.getItem('party');
const cachedParty = localStorageCache? JSON.parse(localStorageCache)as PartyState: {members:[], partyLevel:1}as PartyState


const partySlice = createSlice({
    name: 'party',
    initialState: cachedParty,
    reducers: {
        //adding an Entity to the party.
        addPcToParty(state, action: PayloadAction<Entity>){
            //Checks if the selected PC is not already part of the party and adds them if this is not the case.
           if(!state.members.includes(action.payload)){
            const pcToAdd = action.payload;
            pcToAdd.resources = getClassResources(action.payload.class!, state.partyLevel).resource;
            state.members = [...state.members, pcToAdd]

           }
           
        },
        //Update the current status of the selected partymember
        updatePartyMember(state, action:PayloadAction<UpdatePartyMember>){
            state.members[action.payload.index] = action.payload.newValues

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

export const {addPcToParty, removePcFromParty, changePartyLevel, updatePartyMember} = partySlice.actions;
export default partySlice.reducer;