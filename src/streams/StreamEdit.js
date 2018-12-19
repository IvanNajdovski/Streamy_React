import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../actions';
import _ from 'lodash';

import StreamForm from './streamForm';

class StreamEdit extends Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues)
}
    renderStream(){
        if(!this.props.stream){
            return null
        }else{
            return(
                <div>
                    <h3>Edit Stream</h3>
                    <StreamForm
                        initialValues={_.pick(this.props.stream, "title", "description")}
                        onSubmit={this.onSubmit}/>
                </div>
            )
        }
    }
    render() {
        return(
            <div>
                {this.renderStream()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return{
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);