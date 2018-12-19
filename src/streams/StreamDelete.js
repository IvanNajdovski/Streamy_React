import React, { Fragment, Component } from 'react';
import Modal from '../components/Modal';
import history from '../history';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from '../actions';

class StreamDelete extends Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    onDelete = () =>{
        this.props.deleteStream(this.props.match.params.id)
}
    renderActions(){
        return(
            <Fragment>
                <button onClick={this.onDelete} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        )
}
    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete this Stream"
        }else{
            return `Are you sure you want to delete Stream with title "${this.props.stream.title}"`
        }
}
    render(){


                return(

                        <Modal
                            title="Delete Stream"
                            content={this.renderContent()}
                            actions={this.renderActions()}
                            onDismiss={() => history.push("/")}
                        />

                )
            }


    }


const mapStateToProps = (state, ownProps) => {
    return {
        stream : state.streams[ownProps.match.params.id]
    }

}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);