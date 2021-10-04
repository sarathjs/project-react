import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCustomer, getCustomer, updateCustomer } from "../../redux/action/action.customer";
import { getCustomerReservation } from "../../redux/action/action.reservation";
import {Table,Button} from 'react-bootstrap'



class ViewCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.props.getCustomerData()
    }


    editData = (id) => {

        this.data = this.props.customerData[id]

        this.props.updateCustomer(this.data)

        this.props.history.push('/addcustomer')

    }



    deleteData = (id) => {

        this.props.deleteCustomer(id);

        this.props.getCustomerData()



    }


    customerreservation = (id) => {

        this.props.customerReservation(id);
        this.props.history.push("/viewcustomerreservation")





    }




    render() {

        let { customerData } = this.props


        return (
            <>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Cus_id</th>
                            <th>Name</th>
                            <th>Phone</th>


                        </tr>



                    </thead>

                    <tbody>
                        {customerData.map((res, key) => (
                            <tr>
                                <td> {res.cus_id} </td>
                                <td> {res.name} </td>
                                <td> {res.phone} </td>
                                

                                <td> <Button onClick={() => this.editData(key)} variant="primary">Edit</Button></td>

                                

                                <td> <Button onClick={() => this.customerreservation(res.cus_id)} variant="success">Reservations Details</Button></td>

                                <td> <Button onClick={() => this.deleteData(res.cus_id)} variant="danger">Delete</Button></td>

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
        customerData: state.customer.customer
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        getCustomerData: bindActionCreators(getCustomer, dispatch),
        updateCustomer: bindActionCreators(updateCustomer, dispatch),
        deleteCustomer: bindActionCreators(deleteCustomer, dispatch),
        customerReservation: bindActionCreators(getCustomerReservation, dispatch),
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(ViewCustomer)