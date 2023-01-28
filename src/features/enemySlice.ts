import  {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Entity } from '../types/GlobalTypes'

interface EnemyState {
    entities: Entity[],
}

const initialEnemyState: EnemyState = {
    entities: [],

}

interface UpdateEnemy {
    enemy: Entity,
    index: number
}

const enemySlice = createSlice({
    name: 'enemies',
    initialState: initialEnemyState,
    reducers: {
        //adding an Entity to Enemies.
        addEntityToEnemies(state, action: PayloadAction<Entity>){
            state.entities = [... state.entities, action.payload]
           
        },
        //Removes the selected Entity from Enemies
        removeEntityFromEnemies(state, action: PayloadAction<number>){
           state.entities.splice(action.payload, 1);
        },
        //Updates the selected enemy with the new stats
        updateEnemy(state, action: PayloadAction<UpdateEnemy>){
            state.entities[action.payload.index] = action.payload.enemy
        }
    }
})

export const { addEntityToEnemies, removeEntityFromEnemies, updateEnemy} = enemySlice.actions;
export default enemySlice.reducer;