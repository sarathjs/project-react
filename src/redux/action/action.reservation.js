export const RESERVATION_DATA="RESERVATION_DATA";
export const EDIT_RESERVATION="EDIT_RESERVATION";
export const CUSTOMER_RESERVATION = "CUSTOMER_RESERVATION";



export const getReservation = () => {
    return(dispatch)=> {
        fetch('http://localhost:3200/reservation_details')
           .then(response=>response.json())
           .then(data=>
            dispatch({
                type:RESERVATION_DATA,
                payload:data
            }))
        }
    }



    export const addReservation = (data) => {

        return (dispatch) => {
    
            fetch('http://localhost:3200/reservation_details', {
    
                headers: {
    
                    'accept': 'application/json',
    
                    'content-type': 'application/json'
    
                },
    
                method: 'POST',
    
                body: JSON.stringify(data)
    
            }).then(response => response.json())
    
                .then(response => { console.log(response) })
    
        }
    
    }


    export const updateReservation=(data)=>{

        return{
    
            type:EDIT_RESERVATION,
    
            payload:data
    
        }
    
    }
    
    
    export const editReservation=(data,id)=>{
    
        return (dispatch)=>{
    
            fetch(`http://localhost:3200/reservation_details/${id}`,{
    
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

    export const deleteReservation=(id)=>{

        return (dispatch)=>{
    
            fetch(`http://localhost:3200/reservation_details/${id}`,{
    
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



    export const getCustomerReservation = (id) => {
        return (dispatch) => {
            fetch(`http://localhost:3200/reservation_details/reservation/${id}`)
                .then(response => response.json())
                .then(data =>
                    dispatch({
                        type: CUSTOMER_RESERVATION,
                        payload: data
                    }))
        }
    }