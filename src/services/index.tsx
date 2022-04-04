export function getRandomValue(value1: number,value2?:number){
    if(value1 && value2){
        return (Math.floor(Math.random() * (value2 - value1) + value1));
    }
    else 
        return (Math.floor(Math.random()* value1))
    
   
}