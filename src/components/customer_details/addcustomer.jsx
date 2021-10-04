import React from "react";


import { connect } from "react-redux";

import { bindActionCreators } from 'redux'
import { addCustomer, editCustomer, updateCustomer } from "../../redux/action/action.customer";
import {Button} from 'react-bootstrap'







class AddCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cus_id:this.props.editData.cus_id?this.props.editData.cus_id:"",
            name:this.props.editData.name?this.props.editData.name:"",
            phone:this.props.editData.phone?this.props.editData.phone:""

        }

    }



    saveData = () => {


        this.props.addcustomer({ cus_id: this.state.cus_id, name: this.state.name, phone: this.state.phone })

    }

    editData = () => {

        this.props.editCustomer(this.state, this.props.editData.cus_id)
        console.log(this.state)

        this.props.updateCustomer({})

        this.props.history.push('/viewcustomer')

    }



    render() {

        let {editData}=this.props

        return (

            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center" }}>

    

                <b>cus_id</b> <input style={{width:"200px"}} type="text" value={this.state.cus_id} onChange={(event) => this.setState({ cus_id: event.target.value })} />{this.state.cus_id} <br /><br />
                <b> Customer Name</b> <input style={{width:"200px"}} type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />{this.state.name} <br /><br />
                <b> Contact</b> <input style={{width:"200px"}} type="text" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} />{this.state.phone}<br /><br />
                {

                    editData.cus_id ? <button onClick={this.editData}>Update</button> : <Button variant="dark" onClick={this.saveData}>SAVE</Button>

                }<br /><br /><br /><br />

            </div>

        )

    }

}

const mapStateToProps = (state) => {
    return {
        editData: state.customer.editData
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        addcustomer: bindActionCreators(addCustomer, dispatch),
        editCustomer: bindActionCreators(editCustomer, dispatch),
        updateCustomer: bindActionCreators(updateCustomer, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)

