const orderActions = {
    userOpenedOrder() {
        return {
            type: 'USER_OPENED_ORDER'
        };
    },
    userClosedOrder() {
        return {
            type: 'USER_CLOSED_ORDER'
        };
    },
    userFormedOrder(payload) {
        return {
            type: 'USER_FORMED_ORDER',
            payload
        };
    },
    userSubmittedOrder() {
        return {
            type: 'USER_SUBMITTED_ORDER'
        };
    }
};

export default orderActions;