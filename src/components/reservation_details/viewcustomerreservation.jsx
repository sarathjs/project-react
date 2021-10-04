import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCustomerReservation } from "../../redux/action/action.reservation";
import {Table} from 'react-bootstrap'



class ViewcustomerReservation extends React.Component {

    constructor(props) {
        super(props)
       
    }




    render() {

        let { customerreservationData } = this.props;
        

        return (
            <>

<Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Cus_id</th>
                        <th>Mov_id</th>
                        <th>Booked_seats</th>
                        <th>Date</th>
                        <th>Book_status</th>
                        <th>Show_time</th>
                        <th>Res_id</th>
                        <th>no_of_booking</th>


                    </tr>

                    </thead>
                    <tbody>
                    {customerreservationData.map((res,key) => (
                        <tr>
                            <td> {res.cus_id} </td>
                            <td> {res.mov_id} </td>
                            <td> {res.booked_seats} </td>
                            <td> {res.mov_date} </td>
                            <td> {res.book_status} </td>
                            <td> {res.show_time} </td>
                            <td> {res.res_id} </td>
                            <td> {res.no_of_booking} </td>

                            


                        </tr>
                    ))}

</tbody>
                </Table>

            </>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        customerreservationData: state.customerreservation
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        getcustomerReservationData: bindActionCreators(getCustomerReservation, dispatch),
        

    }
}

export default connect(mapStateToProps, mapDispactchToProps)(ViewcustomerReservation)