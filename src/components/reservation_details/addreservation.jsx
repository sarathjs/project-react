import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'
import { getMovie } from "../../redux/action/action.movie";


import { addReservation, editReservation, updateReservation } from "../../redux/action/action.reservation";
import { getshowtime } from "../../redux/action/action.show";
import { getStatus } from "../../redux/action/action.status";
import {Button} from 'react-bootstrap'
import image1 from '../images/image2.jpg'






class AddReservation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cus_id: this.props.editData.cus_id ? this.props.editData.cus_id : "",
            mov_id: this.props.editData.mov_id ? this.props.editData.mov_id : "",
            booked_seats: this.props.editData.booked_seats ? this.props.editData.booked_seats : "",
            mov_date: this.props.editData.mov_date ? this.props.editData.mov_date :"",
            book_status: this.props.editData.book_status ? this.props.editData.book_status : null,
            show_time:this.props.editData.show_time ? this.props.editData.show_time : null,
            res_id: this.props.editData.res_id ? this.props.editData.res_id : "",
            no_of_booking: this.props.editData.no_of_booking ? this.props.editData.no_of_booking : null

        }
        this.props.getShowTime();
        this.props.getBookStatus();
        this.props.getMovieId()


    }



    saveData = () => {


        this.props.addreservation({
            cus_id: this.state.cus_id, mov_id: this.state.mov_id, booked_seats: this.state.booked_seats,
            mov_date: this.state.mov_date, book_status: this.state.book_status, show_time: this.state.show_time, res_id: this.state.res_id, no_of_booking: this.state.no_of_booking
        })

    }

    editData = () => {

        this.props.editReservation(this.state, this.props.editData.res_id)
        console.log(this.state)

        this.props.updateReservation({})

        this.props.history.push('/viewreservation')

    }



    render() {

        let { showTime } = this.props;
        let { editData } = this.props;
        let { bookStatus } = this.props;
        let { movieId } = this.props;

        return (

            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>

               <b> Cus id </b> <input style={{width:"200px"}} type="text" value={this.state.cus_id} onChange={(event) => this.setState({ cus_id: event.target.value })} /> <br /><br />



               <b> Mov id</b> <select style={{width:"200px"}} name="mov_id" value={this.state.mov_id} onChange={(event) => this.setState({ mov_id: event.target.value })}>

                    {
                        movieId.map(res => (
                            <option value={res.mov_id} >{res.movie_name}</option>
                        ))
                    }

                </select>{this.state.mov_id}<br /><br />





                <b> Booked Seats</b> <input style={{width:"200px"}} type="text" value={this.state.booked_seats} onChange={(event) => this.setState({ booked_seats: event.target.value })} /><br /><br />
                <b>  Movie Date</b> <input style={{width:"200px"}} type="Date" value={this.state.mov_date} onChange={(event) => this.setState({ mov_date: event.target.value })} />{this.state.mov_date}<br /><br />



                <b> Status</b><select style={{width:"200px"}} name="book_status" value={this.state.book_status} onChange={(event) => this.setState({ book_status: event.target.value })}>

                    {
                        bookStatus.map(res => (
                            <option value={res.status_no} >{res.book_status}</option>
                        ))
                    }

                </select>{this.state.book_status}<br /><br />


                <b> Show Time</b> <select style={{width:"200px"}} name="show_time" value={this.state.show_time} onChange={(event) => this.setState({ show_time: event.target.value })}>

                    {
                        showTime.map(res => (
                            <option value={res.show_no} >{res.show_type},{res.show_time}</option>
                        ))
                    }

                </select>{this.state.show_time}<br /><br />


                <b>   res_id</b> <input style={{width:"200px"}} type="text" value={this.state.res_id} onChange={(event) => this.setState({ res_id: event.target.value })} /><br /><br />
                <b> No.of.Booking</b> <input style={{width:"200px"}} type="text" value={this.state.no_of_booking} onChange={(event) => this.setState({ no_of_booking: event.target.value })} /><br /><br />


                {

                    editData.res_id ? <button onClick={this.editData}>Update</button> : <Button variant="dark" onClick={this.saveData}>SAVE</Button>

                }

            </div>

        )

    }

}


const mapStateToProps = (state) => {
    return {
        showTime: state.showtime,
        editData: state.reservation.editData,
        bookStatus: state.status,
        movieId:state.movie.movie



    }
}




const mapDispatchToProps = (dispatch) => {

    return {

        addreservation: bindActionCreators(addReservation, dispatch),
        getShowTime: bindActionCreators(getshowtime, dispatch),
        editReservation: bindActionCreators(editReservation, dispatch),
        updateReservation: bindActionCreators(updateReservation, dispatch),
        getBookStatus: bindActionCreators(getStatus, dispatch),
        getMovieId:bindActionCreators(getMovie, dispatch)

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddReservation)

