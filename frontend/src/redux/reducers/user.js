const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};
export default userReducer;