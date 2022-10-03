const loginReducer = (state = {authLogIn: false}, actionType) => {
    console.log(actionType.type)
    console.log(state)
    switch (actionType.type) {
        case 'LOGIN':
            return {
                authLogIn: true
            }

            break;
        case 'LOGOUT':
            return {
                authLogIn: false
            }
            break;

        default:
            return state;


    }
}
export default loginReducer;
