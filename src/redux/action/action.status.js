export const STATUS_DATA = "STATUS_DATA";



export const getStatus = () => {
    return (dispatch) => {
        fetch('http://localhost:3200/reservation_details/book_status')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: STATUS_DATA,
                    payload: data
                }))
    }
}