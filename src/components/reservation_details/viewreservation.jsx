import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Table,Button} from 'react-bootstrap'

import { deleteReservation, getReservation, updateReservation } from "../../redux/action/action.reservation";


class ViewReservation extends React.Component {

    constructor(props) {
        super(props)
        this.props.getReservationData()
    }

    editData=(id)=>{

        this.data=this.props.reservationData[id]

        this.props.updateReservation(this.data)

        this.props.history.push('/addreservation')

    }



    deleteData=(id)=>{

        this.props.deleteReservation(id);

        this.props.getReservationData()

        

    }


    render() {

        let { reservationData } = this.props;
        

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
                    {reservationData.map((res,key) => (
                        <tr>
                            <td> {res.cus_id} </td>
                            <td> {res.mov_id} </td>
                            <td> {res.booked_seats} </td>
                            <td> {res.mov_date} </td>
                            <td> {res.book_status} </td>
                            <td> {res.show_time} </td>
                            <td> {res.res_id} </td>
                            <td> {res.no_of_booking} </td>

                            

                            <td> <Button onClick={() => this.editData(key)} variant="primary">Edit</Button></td>

                            <td> <Button onClick={() => this.deleteData(res.res_id)} variant="danger">Delete</Button></td>
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
        reservationData: state.reservation.reservation
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        getReservationData: bindActionCreators(getReservation, dispatch),
        updateReservation: bindActionCreators(updateReservation, dispatch),
        deleteReservation: bindActionCreators(deleteReservation, dispatch)

    }
}

export default connect(mapStateToProps, mapDispactchToProps)(ViewReservation)