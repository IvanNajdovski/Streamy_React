import * as actionTypes from '../actions/types';


const INITIAL_STATE = {
    isLogedIn: null,
    userId: null

};

export default ( state = INITIAL_STATE, action) => {
        switch(action.type){
            case actionTypes.SIGN_IN:
                return {...state, isLogedIn: true , userId: action.id}
            case actionTypes.SIGN_OUT:
                return {...state, isLogedIn: false, userId: null}
            default:
                return state;
        }
};