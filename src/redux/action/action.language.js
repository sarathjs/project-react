export const LANGUAGE_DATA = "LANGUAGE_DATA";



export const getLanguage = () => {
    return (dispatch) => {
        fetch('http://localhost:3200/movie_details/language_details')
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: LANGUAGE_DATA,
                    payload: data
                }))
    }
}