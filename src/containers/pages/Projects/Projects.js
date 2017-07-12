import React, { Component } from 'react';

import { Icon } from '../../../components/Icon';
import { WORKS } from '../../../constants';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveClass: "move-top",
            view: "table",
            sort: null
        };
    }

    moveToTop = () => {
        const scrollInterval = setInterval(() => {
            window.scrollTo(0, window.pageYOffset - 100);
            if (window.pageYOffset === 0 ) clearInterval(scrollInterval);
        }, 1);
    };

    scrollListener = () => {
        if (window.pageYOffset > 700 && this.state.moveClass === "move-top") {
            this.setState({
                moveClass: "move-top visible"
            });
        } else if (window.pageYOffset <= 700 && this.state.moveClass === "move-top visible") {
            this.setState({
                moveClass: "move-top"
            });
        }
    };

    resizeListener= () => {
        if (window.innerWidth <= 800) {
            this.setState({
                view: "table"
            });
        }
    };

    toggleView = () => {
        if (this.state.view === "list") {
            this.setState({
                view: "table"
            });
        } else {
            this.setState({
                view: "list"
            });
        }
    };

    sortDesc = () => {
        if (this.state.sort === 'desc') {
            this.setState({
                sort: null
            });
        } else {
            this.setState({
                sort: 'desc'
            });
        }
    };

    sortAsc = () => {
        if (this.state.sort === 'asc') {
            this.setState({
                sort: null
            });
        } else {
            this.setState({
                sort: 'asc'
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.resizeListener);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.resizeListener);
    }

    render() {
        //sort parameters
        let sortWorks;

        switch (this.state.sort) {
            case "desc":
                sortWorks = WORKS.sort((a, b) => b.votes - a.votes);
                break;
            case "asc":
                sortWorks = WORKS.sort((a, b) => a.votes - b.votes);
                break;
            default:
                sortWorks = WORKS;
        }

        return (
            <main className="main projects">
                <div className="filter">
                    <div className="filter-holder">
                        <div className={this.state.view === "list" ? "filter-item active" : "filter-item"}
                             onClick={this.toggleView}>
                            <Icon name="fa fa-list" />
                        </div>
                        <div className={this.state.view === "table" ? "filter-item active" : "filter-item"}
                             onClick={this.toggleView}>
                            <Icon name="fa fa-table" />
                        </div>
                        <div className={this.state.sort === "desc" ? "filter-item active" : "filter-item"}
                             onClick={this.sortDesc}>
                            <Icon name="fa fa-sort-amount-desc" />
                        </div>
                        <div className={this.state.sort === "asc" ? "filter-item active" : "filter-item"}
                             onClick={this.sortAsc}>
                            <Icon name="fa fa-sort-amount-asc" />
                        </div>
                    </div>
                </div>
                <div className={this.state.moveClass} onClick={this.moveToTop}>
                    <div ><Icon name="fa fa-arrow-up" /></div>
                </div>
                <div className="project-list">
                    {
                        sortWorks.map((work, i) => {
                            let style = {};

                            if (this.state.view === "table") {
                                style = {backgroundImage: "url(" + work.photo + ")"};
                            }

                            return (
                                <div className={this.state.view === "list" ? "project-item" : "project-item table"} key={"item" + i}>
                                    <div className="project-item-header">
                                        <span className="project-title">Проект {work.id}</span>
                                        <span className="project-votes"><Icon name="fa fa-thumbs-o-up"/>{work.votes}</span>
                                    </div>
                                    <div className="project-item-main" style={style}>
                                        <div className="project-info">
                                            <h3>Виконавець:</h3>
                                            <div><Icon name="fa fa-user-o"/>{work.worker.fullName()}</div>
                                            <div><Icon name="fa fa-bank"/>{work.worker.city}</div>
                                            <div><Icon name="fa fa-star-o"/>{work.worker.rate} / 10</div>
                                            <div><Icon name="fa fa-clock-o"/>{work.period} тижнів</div>
                                        </div>
                                        {
                                            this.state.view === "list" &&
                                            <div className="project-photo">
                                                <img src={work.photo} alt=""/>
                                                <div>{work.text}</div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        );
    }
}

export default Projects;