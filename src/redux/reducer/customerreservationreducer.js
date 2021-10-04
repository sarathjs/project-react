import { CUSTOMER_RESERVATION } from "../action/action.reservation";



export const customerreservationReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case CUSTOMER_RESERVATION:
            return  payload;
       
        default:
            return state
    }
}