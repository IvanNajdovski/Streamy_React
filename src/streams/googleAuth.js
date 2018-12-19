import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions'

class GoogleAuth extends Component{

    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '495896792166-mfud305kh4557ltu4onlntv6vtmddj7a.apps.googleusercontent.com',
                scope: "email"
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
        });

    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut()
}
}
    onSignedInClick = () => {
        this.auth.signIn()
}
    onSignedOutClick = () => {
        this.auth.signOut()
}
    renderAuthButton(){
        if(this.props.isLogedIn === null){
            return null;
        }else if(this.props.isLogedIn){
            return (
                <button onClick={this.onSignedOutClick}
                        className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }else{
            return (
                <button onClick={this.onSignedInClick}
                    className="ui red google button">
                <i className="google icon"/>
                Sign In with Google
            </button>
            )
        }
    }
    render(){
        return(
            <div>
               {this.renderAuthButton()}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogedIn: state.auth.isLogedIn,

    }
}
export default connect( mapStateToProps, { signIn, signOut })(GoogleAuth);