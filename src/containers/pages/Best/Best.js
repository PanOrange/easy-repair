import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import { formQuery } from '../../../servises';

import { Avatar } from '../../../components/Items';
import Alert from '../../../components/Alert';
import Field from '../../../components/Field';

import { WORKERS, CITIES, PHRASES } from '../../../constants';

import { orderActions } from '../../../actions';

class Best extends Component {
    activateForm = (worker) => {
        const {name, surname} = worker;
        this.props.dispatch(orderActions.userOpenedOrder());
        this.props.dispatch(orderActions.userFormedOrder({name, surname}));
    };

    render() {
        let cities = [];
        for (let key in CITIES) {
            cities.push(CITIES[key]);
        }

        return (
            <main className="main best-worker">
                <Accordion>
                    {
                        cities.slice(1).map((item) => {
                            let city;
                            for (let key in CITIES) {
                                if (CITIES[key] === item) city = key;
                            }

                            return (
                                <AccordionItem
                                    title={item}
                                    slug={item}
                                    key={item}
                                    className="fa fa-angle-down"
                                    expandedClassName="rotate"
                                >
                                    {
                                        formQuery(WORKERS, {city: city})
                                            .sort((a, b) => b.rate - a.rate)
                                            .splice(0, 5)
                                            .map((worker, i, arr) => {
                                                return arr.length === 0 ?
                                                <Alert type="info" text={PHRASES.noMasters} /> :
                                                (
                                                    <div key={city + i} className="best-worker-item">
                                                        <Avatar photo={worker.photo} />
                                                        <div className="name">
                                                            <div>{worker.name}</div>
                                                            <div>{worker.surname}</div>
                                                        </div>
                                                        <div className="rate">
                                                            <div>Рейтинг</div>
                                                            <div>{worker.rate} / 10</div>
                                                        </div>
                                                        <div className="works">
                                                            <div>Проектів</div>
                                                            <div>{worker.works}</div>
                                                        </div>
                                                        <div className="experience">
                                                            <div>Досвід на сервісі з</div>
                                                            <div>{(new Date(worker.experience)).toLocaleDateString()}</div>
                                                        </div>
                                                        <div className="order-holder">
                                                            <Field
                                                                name="activateForm"
                                                                clickHandler={()=> {this.activateForm(worker)}}
                                                                text="Замовити"
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                        })
                                    }
                                </AccordionItem>
                            );
                        })
                    }
                </Accordion>
            </main>
        );
    }
}
export default connect( store => ({...store}))(Best);