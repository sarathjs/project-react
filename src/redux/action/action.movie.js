export const MOVIE_DATA="MOVIE_DATA";
export const EDIT_MOVIE="EDIT_MOVIE";



export const getMovie = () => {
    return(dispatch)=> {
        fetch('http://localhost:3200/movie_details')
           .then(response=>response.json())
           .then(data=>
            dispatch({
                type:MOVIE_DATA,
                payload:data
            }))
        }
    }


    export const addMovie = (data) => {

        return (dispatch) => {
    
            fetch('http://localhost:3200/movie_details', {
    
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

    export const updateMovie=(data)=>{

        return{
    
            type:EDIT_MOVIE,
    
            payload:data
    
        }
    
    }

    export const editMovie=(data,id)=>{

        return (dispatch)=>{
    
            fetch(`http://localhost:3200/movie_details/${id}`,{
    
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


    export const deleteMovie=(id)=>{

        return (dispatch)=>{
    
            fetch(`http://localhost:3200/movie_details/${id}`,{
    
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