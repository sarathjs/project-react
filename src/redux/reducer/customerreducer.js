import { CUSTOMER_DATA,  EDIT_CUSTOMER } from "../action/action.customer";


export const customerReducer = (state = {customer:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case CUSTOMER_DATA:
            return  {...state,customer:payload};

            case EDIT_CUSTOMER:

            console.log(state.editData)

            return{...state,editData:payload};

            

       
        default:
            return state
    }
}



