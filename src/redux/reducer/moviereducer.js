import { EDIT_MOVIE, MOVIE_DATA } from "../action/action.movie";

export const movieReducer = (state = {movie:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case MOVIE_DATA:
            return  {...state,movie:payload};
        
            case EDIT_MOVIE:

                console.log(state.editData)
    
                return{...state,editData:payload}
       
        default:
            return state
    }
}