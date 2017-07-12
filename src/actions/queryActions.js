const queryActions = {
    userSentQuery(payload) {
        return {
            type: 'USER_SENT_QUERY',
            payload
        };
    },
    toggleMobileSearch() {
        return {
            type: 'TOGGLE_MOBILE_SEARCH'
        };
    }
};

export default queryActions;