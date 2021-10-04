import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'
import { getCatagory } from "../../redux/action/action.catagory";
import { getLanguage } from "../../redux/action/action.language";

import { addMovie, editMovie, updateMovie } from "../../redux/action/action.movie";






class AddMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movie_name:this.props.editData.movie_name?this.props.editData.movie_name:"",
            language_type:"",
            catagory: "",
            duration:this.props.editData.duration?this.props.editData.duration:"",
            total_seat:this.props.editData.total_seat?this.props.editData.total_seat:null,
            remaining_seat:this.props.editData.remaining_seat?this.props.editData.remaining_seat:null,
            screen:this.props.editData.screen?this.props.editData.screen:""

        }

        this.props.getLanguageType()
        this.props.getMovieType()


    }



    saveData = () => {


        this.props.addmovie({
            movie_name: this.state.movie_name, language_type: this.state.language_type, catagory: this.state.catagory,
            duration: this.state.duration, total_seat: this.state.total_seat, remaining_seat: this.state.remaining_seat, screen: this.state.screen
        })

    }

    editData = () => {

        this.props.editMovie(this.state, this.props.editData.mov_id)
        console.log(this.state)

        this.props.updateMovie({})

        this.props.history.push('/viewmovie')

    }




    render() {

        let { languageType } = this.props;
        let { movieType } = this.props;
        let { editData } = this.props;

        return (

            <div>

                Movie Name <input type="text" value={this.state.movie_name} onChange={(event) => this.setState({ movie_name: event.target.value })} /> <br /><br />

                Language <select name="language_type"  onChange={(event) => this.setState({ language_type: event.target.value })}>

                    {
                        languageType.map(res => (
                            <option value={res.lang_no} >{res.language_type}</option>
                        ))
                    }

                </select>{this.state.language_type}<br /><br />

                Catagory <select name="catagory"  onChange={(event) => this.setState({ catagory: event.target.value })}>

                    {
                        movieType.map(res => (
                            <option value={res.cata_no} >{res.catagory}</option>
                        ))
                    }

                </select>{this.state.catagory}<br /><br />



                Duration <input type="text" value={this.state.duration} onChange={(event) => this.setState({ duration: event.target.value })} /><br /><br />
                Total Seats <input type="text" value={this.state.total_seat} onChange={(event) => this.setState({ total_seat: event.target.value })} /><br /><br />
                Remaining Seats <input type="text" value={this.state.remaining_seat} onChange={(event) => this.setState({ remaining_seat: event.target.value })} /><br /><br />
                Screen <input type="text" value={this.state.screen} onChange={(event) => this.setState({ screen: event.target.value })} /><br /><br />
                
                
                {

editData.mov_id ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>

}

            </div>

        )

    }

}


const mapStateToProps = (state) => {
    return {
        languageType: state.language,
        movieType: state.catagory,
        editData:state.movie.editData
    }
}



const mapDispatchToProps = (dispatch) => {

    return {

        addmovie: bindActionCreators(addMovie, dispatch),
        getLanguageType: bindActionCreators(getLanguage, dispatch),
        getMovieType: bindActionCreators(getCatagory, dispatch),
        editMovie: bindActionCreators(editMovie, dispatch),
        updateMovie: bindActionCreators(updateMovie, dispatch)

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)

