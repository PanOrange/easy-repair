import update from 'react-addons-update';

const initialState = {
    isFormActive: false,
    password: null,
    userLoggedIn: false,
    userName: null
};

const userReducer = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'USER_OPENED_LOGIN_FORM':
            return update(state, {
                isFormActive: { $set: true }
            });
        case 'USER_CLOSED_LOGIN_FORM':
            return update(state, {
                isFormActive: { $set: false },
                userName: { $set: null },
                password: { $set: null }
            });
        case 'USER_LOGGED_IN':
            return update(state, {
                isFormActive: { $set: false },
                userLoggedIn: { $set: true },
                userName: { $set: payload.login },
                password: { $set: payload.password }
            });
        case 'USER_LOGGED_OUT':
            return update(state, {
                userLoggedIn: { $set: false },
                userName: { $set: null },
                password: { $set: null }
            });

        default:
            return state;
    }
};

export default userReducer;