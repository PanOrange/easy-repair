const userActions = {
    userOpenedForm() {
        return {
            type: 'USER_OPENED_LOGIN_FORM'
        };
    },
    userClosedForm() {
        return {
            type: 'USER_CLOSED_LOGIN_FORM'
        };
    },
    userLoggedIn(payload) {
        return {
            type: 'USER_LOGGED_IN',
            payload
        };
    },
    userLoggedOut() {
        return {
            type: 'USER_LOGGED_OUT'
        };
    }
};

export default userActions;