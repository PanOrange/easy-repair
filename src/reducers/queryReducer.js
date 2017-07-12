import update from 'react-addons-update';
import { WORKERS, WORKS } from '../constants';

import { formQuery } from '../servises';

const initialState = {
    isReady: false,
    showMobileSearch: false,
    startDate: null,
    endDate: null,
    city: null,
    work: null,
    rate: null,
    queryWorkers: [],
    bestWorkers: WORKERS.sort((a, b) => b.rate - a.rate).splice(0, 5),
    bestWorks: WORKS.sort((a, b) => b.rate - a.rate).splice(0, 5)

};

const queryReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'USER_SENT_QUERY':
            const {startDate, endDate, rate, city, work} = payload;

            return update(state, {
                isReady: {$set: true},
                showMobileSearch: {$set: false},
                startDate: {$set: startDate},
                endDate: {$set: endDate},
                city: {$set: city},
                work: {$set: work},
                rate: {$set: rate},
                queryWorkers: {$set: formQuery(WORKERS, payload)}
            });
        case 'TOGGLE_MOBILE_SEARCH':
            return update(state, {
                showMobileSearch: {$set: !state.showMobileSearch}
            });
        default:
            return state;
    }
};

export default queryReducer;