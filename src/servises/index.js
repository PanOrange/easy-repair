import { CITIES, SKILLS } from '../constants';

export const formQuery = (Arr, payload) => {
    const {startDate, endDate, rate} = payload;
    let {city, work} = payload;

    city = CITIES[city];
    work = SKILLS[work];

    return Arr
        .filter((item) => {
            return city && city !== 'Всі' ? item.city === city : true;
        })
        .filter((item) => {
            return rate ? item.rate >= rate : true;
        })
        .filter((item) => {
            if (work && work !== 'Всі') {
                return item.skills.some((skill) => {
                    return skill === work;
                })
            } else {
                return true;
            }
        })
        .filter((item) => {
            if (startDate && endDate) {
                const {start, end} = item.schedule;
                return endDate < start || startDate > end;
            } else {
                return true;
            }
        });
};