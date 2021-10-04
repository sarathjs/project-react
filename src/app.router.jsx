import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import App from "./App";

import Header from "./components/core/header";
import Footer from "./components/core/footer";


import Home from "./components/core/home"


import {Provider} from 'react-redux'
import {store} from "./redux/store/store"
import AddMovie from "./components/movie_details/addmovie";
import ViewMovie from "./components/movie_details/viewmovie";
import AddCustomer from "./components/customer_details/addcustomer";
import viewcustomer from "./components/customer_details/viewcustomer";
import AddReservation from "./components/reservation_details/addreservation";
import viewreservation from "./components/reservation_details/viewreservation";
import viewcustomerreservation from "./components/reservation_details/viewcustomerreservation";

const AppRouter=(

    <Provider store={store}>
    <Router>
        <Header></Header>
        <Home></Home>
        <Switch>
            <Route exact path="/" component={App}/>
            
            <Route path="/addmovie" component={AddMovie}/>
            <Route path="/viewmovie" component={ViewMovie}/>
            <Route path="/addcustomer" component={AddCustomer}/>
            <Route path="/viewcustomer" component={viewcustomer}/>
            <Route path="/addreservation" component={AddReservation}/>
            <Route path="/viewreservation" component={viewreservation}/>
            <Route path="/viewcustomerreservation" component={viewcustomerreservation}/>



        </Switch>
        
    </Router>
    <Footer></Footer>
    </Provider>
)

export default AppRouter