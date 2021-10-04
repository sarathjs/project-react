import {combineReducers} from "redux";
import { catagoryReducer } from "./catagoryreducer";
import { customerReducer } from "./customerreducer";
import { customerreservationReducer } from "./customerreservationreducer";
import { languageReducer } from "./languagereducer";

import {movieReducer} from "./moviereducer"
import { reservationReducer } from "./reservationreducer";
import { showReducer } from "./showreducer";
import { statusReducer } from "./statusreducer";

export const rootReduser=combineReducers({
    movie:movieReducer,
    customer:customerReducer,
    reservation:reservationReducer,
    language:languageReducer,
    catagory:catagoryReducer,
    showtime:showReducer,
    status:statusReducer,
    customerreservation:customerreservationReducer
    
})

