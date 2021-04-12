import {SIGNUP} from "../actions/auth";

const initialState = {
    email: '',
    password: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                email: action.email,
                password: action.password
            }
    }
    return state;
}
