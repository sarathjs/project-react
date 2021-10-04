import { SHOW_DATA } from "../action/action.show";



export const showReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SHOW_DATA:
            return  payload;
       
        default:
            return state
    }
}