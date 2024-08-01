import { SET_USER } from "../ActionTypes";

const init = {
    user: null // Define an initial state
}

const User = (state = init, action) => {
    switch (action.type) {
        case SET_USER:
            console.log(action.payload.user); // Debugging purpose
            return {
                ...state,
                user: action.payload.user // Update the user property
            };
        default:
            return state;
    }
}

export default User;
