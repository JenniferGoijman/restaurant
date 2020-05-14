const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GETALL':
            return {
                ...state,
                users: action.payload
            }
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