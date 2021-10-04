export const CATAGORY_DATA = "CATAGORY_DATA";



export const getCatagory = () => {
    return (dispatch) => {
        fetch('http://localhost:3200/movie_details/movie_catagory')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: CATAGORY_DATA,
                    payload: data
                }))
    }
}