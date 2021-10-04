import axios from 'axios';
export const CUSTOMER_DATA = "CUSTOMER_DATA";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";




export const getCustomer = () => {
    return (dispatch) => {
        fetch('http://localhost:3200/customer_details')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: CUSTOMER_DATA,
                    payload: data
                }))
    }
}

export const updateCustomer=(data)=>{

    return{

        type:EDIT_CUSTOMER,

        payload:data

    }

}


export const editCustomer=(data,id)=>{

    return (dispatch)=>{

        fetch(`http://localhost:3200/customer_details/${id}`,{

            headers:{

                'accept':'application/json',

                'content-type':'application/json'

            },

            method:'PUT',

            body:JSON.stringify(data)

        })

        .then(response=>response.json())

        .then(response=>{console.log(response)})

    }

}


export const addCustomer = (data) => {

    return (dispatch) => {

       



            axios.post('http://localhost:3200/customer_details',data).then(response =>console.log(response));
    
    
    
        }
    
    
    }



    export const deleteCustomer=(id)=>{

        return (dispatch)=>{
    
            fetch(`http://localhost:3200/customer_details/${id}`,{
    
                headers:{
    
                    'accept':'application/json',
    
                    'content-type':'application/json'
    
                },
    
                method:'DELETE'
    
            })
    
            .then(response=>response.json())
    
            .then(response=>{console.log(response)})
    
        }
    
    }


    
    