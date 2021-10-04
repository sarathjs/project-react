import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { deleteMovie, getMovie, updateMovie } from "../../redux/action/action.movie";
import {Table,Button} from 'react-bootstrap'


class ViewMovie extends React.Component{

    constructor(props){
        super(props)
        this.props.getMovieData()
    }


    editData=(id)=>{

        this.data=this.props.movieData[id]

        this.props.updateMovie(this.data)

        this.props.history.push('/addmovie')

    }



    deleteData=(id)=>{

        this.props.deleteMovie(id);

        this.props.getMovieData()

        

    }

    

    
    render(){

        let {movieData}=this.props
        
        return(
            <>

<Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Mov_id</th>
                        <th>Movie_name</th>
                        <th>language_type</th>
                        <th>Catagory</th>
                        <th>Duration</th>
                        <th>Total_seat</th>
                        <th>remaining_seat</th>
                        <th>Screen</th>

                    </tr>
                    </thead>
                    <tbody>
                    {movieData.map((res,key) => (
                        <tr>
                            <td> {res.mov_id} </td>
                            <td> {res.movie_name} </td>
                            <td> {res.language_type} </td>
                            <td> {res.catagory} </td>
                            <td> {res.duration} </td>
                            <td> {res.total_seat} </td>
                            <td> {res.remaining_seat} </td>
                            <td> {res.screen} </td>

                            

                            <td> <Button onClick={()=>this.editData(key)} variant="primary">Edit</Button></td>

                            
                            <td> <Button onClick={()=>this.deleteData(res.mov_id)} variant="danger">Delete</Button></td>


                        </tr>
                    ))}

</tbody>
                </Table>
            
            </>
           
    )}
    
        }

        const mapStateToProps=(state)=>{
            return {
                movieData:state.movie.movie
            }
        }

        const mapDispactchToProps=(dispatch)=>{
            return{
               getMovieData:bindActionCreators(getMovie,dispatch),
               updateMovie:bindActionCreators(updateMovie,dispatch),
               deleteMovie:bindActionCreators(deleteMovie,dispatch),
               
            }
        }

export default connect(mapStateToProps,mapDispactchToProps)(ViewMovie)