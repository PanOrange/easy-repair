import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Avatar, Rate } from '../../../components/Items';
import Alert from '../../../components/Alert';
import Field from '../../../components/Field';
import { WORKS, PHRASES } from '../../../constants';

import { orderActions } from '../../../actions';

class Query extends Component {
    activateForm = (worker) => {
        const {name, surname} = worker;
        this.props.dispatch(orderActions.userOpenedOrder());
        this.props.dispatch(orderActions.userFormedOrder({name, surname}));
    };

    render() {
        window.scrollTo(0, 0);
        const { queryWorkers, isReady } = this.props.query;
        const quantity = queryWorkers.length;
        let alert;

        isReady &&  quantity > 0 ? (
            alert = PHRASES.foundItems  + quantity
        ) : (
            isReady ? (
                    alert = PHRASES.foundNoItems
                ) : (alert = PHRASES.noQueries)
        );

        return (
            <main className="main">
                <div className="filter">
                    <Alert type="info" text={alert} />
                </div>
                {
                    queryWorkers.map((worker) => {
                        const works = WORKS.filter((work) => {
                            return work.worker.id === worker.id;
                        });

                        return (
                            <div key={worker.id + Math.random()} className="query-item">
                                <div className="worker-card">
                                    <div className="block">
                                        <Avatar photo={worker.photo} />
                                        <Rate rate={worker.rate} />
                                    </div>
                                    <div className="block">
                                        <div className="worker-name">
                                            <span className="city">{worker.city}</span>
                                            <span className="name">{worker.name + " " + worker.surname}</span>
                                        </div>
                                        <div className="schedule">
                                            <h4>Майстер буде недоступний в період</h4>
                                            <p>з {(new Date(worker.schedule.start)).toLocaleDateString('ua')} по {(new Date(worker.schedule.end)).toLocaleDateString('ua')}</p>
                                            <Field
                                                name="activateForm"
                                                clickHandler={()=> {this.activateForm(worker)}}
                                                text="Замовити"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="worker-info">
                                    <Tabs >
                                        <TabList>
                                            <Tab>Досвід</Tab>
                                            <Tab>Навички</Tab>
                                            <Tab>Проекти</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <h2>Зареєстрований з {(new Date(worker.experience)).toLocaleDateString('ua')}</h2>
                                            {
                                                works.length > 0 ? (
                                                    <p className="info">Виконано робіт: {works.length}</p>
                                                ) : (
                                                    <p className="info">{PHRASES.noProjects}</p>
                                                )
                                            }
                                            {
                                                worker.description.map((item) => {
                                                    return (
                                                        <p key={worker.id + Math.random()} className="description">{item}</p>
                                                    );
                                                })
                                            }
                                        </TabPanel>
                                        <TabPanel>
                                            {
                                                worker.skills.map((skill) => {
                                                    return (
                                                        <span key={worker.id + Math.random()} className="skill">{skill}</span>
                                                    );
                                                })
                                            }
                                        </TabPanel>
                                        <TabPanel>
                                            {
                                                works.length > 0 ? (
                                                    works.map((work) => {
                                                        return (
                                                            <li key={work.id + Math.random()} className="work-item">
                                                                <h2>Проект {work.id}</h2>
                                                                <img src={work.photo} alt=""/>
                                                                <p>{work.text}</p>
                                                            </li>
                                                        );
                                                    })
                                                ) : (
                                                    <p>Наразі немає завершених проектів</p>
                                                )
                                            }
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        );
                    })
                }
            </main>
        );
    }
}

export default connect(store => ({...store}))(Query);