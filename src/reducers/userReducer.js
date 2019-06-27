export const userReducer = (state = {}, action) => {

    switch (action.type) {

        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }

};

export default userReducer;
