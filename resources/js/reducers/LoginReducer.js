import * as constants from '../reducers/Action/LoginActionType';

const initialState = {
    auth: {loggedIn: false}

};
const loginReducer = (state = initialState, actionType) => {
    switch (actionType.type) {
        case 'LOG_IN':
            return {...state, auth: {loggedIn: true}};
            break;
        case 'LOG_OUT':
            return {...state, auth: {loggedIn: false}};
            break;
        default:
            return state;
            break;

    }
}
export default loginReducer;
