import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Entity } from "src/types/GlobalTypes";


const cachedParty = localStorage.getItem('party');
const party = cachedParty? JSON.parse(cachedParty) as Entity[]: [];


export interface Achievement{
    name: string,
    currentValue: number,
    targetValue: number
}

interface AchievementsInterface {
    pc: string,
    achievements: Achievement[]
}



const partyAchievements = party.map((pc)=> ({pc:pc.name, achievements: pc.achievements? pc.achievements.map((achievement)=> ({name: achievement.name, currentValue: achievement.currentValue, targetValue: achievement.targetValue})): []})) as AchievementsInterface[];

console.log(partyAchievements);


const achievementSlice = createSlice({
    name: 'achievement',
    initialState: partyAchievements,
    reducers: {
        updateAchievements(state, action: PayloadAction<AchievementsInterface[]>){
            state = action.payload;
        }
    }
})

export const {updateAchievements} = achievementSlice.actions
export default achievementSlice.reducer