import { LANGUAGE_DATA } from "../action/action.language";


export const languageReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case LANGUAGE_DATA:
            return  payload;
       
        default:
            return state
    }
}