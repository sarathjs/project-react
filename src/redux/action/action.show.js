export const SHOW_DATA = "SHOW_DATA";



export const getshowtime = () => {
    return (dispatch) => {
        fetch('http://localhost:3200/reservation_details/show_time')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SHOW_DATA,
                    payload: data
                }))
    }
}