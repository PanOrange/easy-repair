import update from 'react-addons-update';
import Chance from 'chance';
const chance = new Chance();

const initialState = {
    isOrderOpened: false,
    isSubmitted: false,
    number: null,
    name: "",
    surname: "",
    startDate: null,
    endDate: null,
    city: "Всі",
    work: null,
    email: '',
    phone: ''
};

const orderReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'USER_OPENED_ORDER':
            return update(state, {
                isOrderOpened: { $set: true }
            });
        case 'USER_CLOSED_ORDER':
            return update(state, {
                isOrderOpened: { $set: false }
            });
        case 'USER_FORMED_ORDER':
            const {startDate, endDate, city, work, name, surname } = payload;

            return update(state, {
                isSubmitted: {$set: false},
                name: {$set: name},
                surname: {$set: surname},
                startDate: {$set: startDate},
                endDate: {$set: endDate},
                city: {$set: city},
                work: {$set: work}
            });
        case 'USER_SUBMITTED_ORDER':
            return update(state, {
                isSubmitted: {$set: true},
                number: {$set: chance.natural({min: 1001, max: 2000})}
            });
        default:
            return state;
    }
};

export default orderReducer;