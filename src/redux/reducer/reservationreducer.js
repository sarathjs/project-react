
import { CUSTOMER_RESERVATION, EDIT_RESERVATION, RESERVATION_DATA } from "../action/action.reservation";


export const reservationReducer = (state = {reservation:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case RESERVATION_DATA:
            return  {...state,reservation:payload};

            case EDIT_RESERVATION:

                console.log(state.editData)
    
                return{...state,editData:payload};


            
    



       
        default:
            return state
    }
}




