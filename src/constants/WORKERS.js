import Chance from 'chance';
const chance = new Chance();

import worker1 from '../img/worker1.jpg';
import worker2 from '../img/worker2.jpg';
import worker3 from '../img/worker3.jpg';
import worker4 from '../img/worker4.jpg';
import worker5 from '../img/worker5.jpg';
import worker6 from '../img/worker6.jpg';
import worker7 from '../img/worker7.jpg';


import { CITIES } from './CITIES';
import { SKILLS } from './SKILLS';

//move skills to an array
const skills = [];

for (let key in SKILLS) {
    skills.push(SKILLS[key]);
}

const skill = skills.slice(1);

chance.mixin({
    getSchedule() {
        const today = new Date();
        let start = new Date();
        start.setDate(today.getDate() + chance.natural({min: 1, max: 365}));

        let end = new Date(start);
        end.setDate(start.getDate() + chance.natural({min: 3, max: 14}));

        return { start, end };
    },

    'worker': function () {
        return {
            id:         chance.natural({min: 101, max: 999}),
            name:       chance.pickone([
                'Андрій',
                'Віталій',
                'Василь',
                'Іван',
                'Руслан',
                'Петро',
                'Сергій',
                'Славко'
            ]),
            surname:    chance.pickone([
                'Петренко',
                'Іванчук',
                'Бурштин',
                'Солодкий',
                'Галушко',
                'Важкий',
                'Гарний',
                'Білий'
            ]),
            fullName() {
                return this.name + ' ' + this.surname;
            },
            city:       chance.pickone([
                CITIES.dnipro,
                CITIES.kyiv,
                CITIES.lviv,
                CITIES.odesa
            ]),
            experience: chance.date({year: 2014}),
            schedule: this.getSchedule(),
            skills:     chance.pickset(skill, chance.natural({min: 1, max: 7})),
            works:      chance.natural({min: 1, max: 20}),
            email:      chance.email({domain: 'repair.com'}),
            phone:      chance.phone(),
            rate:       chance.natural({min: 4, max: 10}),
            description: [chance.sentence(), chance.paragraph(), chance.sentence()],
            photo:      process.env.PUBLIC_URL + '/worker' + chance.natural({min: 1, max: 7}) + '.jpg'
        };
    }
});

//define WORKERS
let W = [];
for (let i = 0; i < 30; i++) {
    W.push(chance.worker());
}
export const WORKERS = W;