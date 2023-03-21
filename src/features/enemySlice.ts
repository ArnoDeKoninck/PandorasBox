import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Entity } from '../types/GlobalTypes'

interface EnemyState {
    entities: Entity[],
}

interface UpdateEnemy {
    enemy: Entity,
    index: number
}

const localStorageCache = {entities :localStorage.getItem('enemies')};
const cachedEnemies = localStorageCache.entities? {entities: JSON.parse(localStorageCache.entities)}as EnemyState: {entities: [] as Entity[]} as EnemyState 



const enemySlice = createSlice({
    name: 'enemies',
    initialState: cachedEnemies,
    reducers: {
        //adding an Entity to Enemies.
        addEntityToEnemies(state, action: PayloadAction<Entity>){
            state.entities = [...state.entities, action.payload]
            localStorage.setItem('enemies', JSON.stringify(state.entities))
           
        },
        //Removes the selected Entity from Enemies
        removeEntityFromEnemies(state, action: PayloadAction<number>){
           state.entities.splice(action.payload, 1);
           localStorage.setItem('enemies', JSON.stringify(state.entities))
        },
        //Updates the selected enemy with the new stats
        updateEnemy(state, action: PayloadAction<UpdateEnemy>){
            state.entities[action.payload.index] = action.payload.enemy
            localStorage.setItem('enemies', JSON.stringify(state.entities))
        }
    }
})

export const { addEntityToEnemies, removeEntityFromEnemies, updateEnemy} = enemySlice.actions;
export default enemySlice.reducer;