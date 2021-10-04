import { CATAGORY_DATA } from "../action/action.catagory";


export const catagoryReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case CATAGORY_DATA:
            return  payload;
       
        default:
            return state
    }
}