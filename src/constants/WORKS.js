import Chance from 'chance';
const chance = new Chance();

import { WORKERS } from './WORKERS';

chance.mixin({
    'work': function () {
        return {
            id: chance.natural({min: 1001, max: 2000}),
            worker: chance.pickone(WORKERS),
            text: chance.paragraph(),
            photo: process.env.PUBLIC_URL + '/img-studio-' + chance.natural({min: 2, max: 13}) + '.jpg',
            period: chance.natural({min: 1, max: 10}),
            votes: chance.natural({min: 10, max: 200})
        }
    }
});

let R = [];
for (let i = 0; i < 40; i++) {
    R.push(chance.work());
}
export const WORKS = R;