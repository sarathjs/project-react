import { STATUS_DATA } from "../action/action.status";



export const statusReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case STATUS_DATA:
            return  payload;
       
        default:
            return state
    }
}