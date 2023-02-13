import { INCREMENT } from "./types"

const initialState = {
    counter1:0
}


export const counterReducer = (state=initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return {counter1 : state.counter1+1}
        
        default:
            return state
    }
}