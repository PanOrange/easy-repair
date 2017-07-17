import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import { Avatar, Rate } from '../../../components/Items';
import { Icon } from '../../../components/Icon';
import Field from '../../../components/Field';

import { orderActions } from '../../../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNames: "main homepage is-loading",
            isOrderFormActive: false,
            windowWidth: window.innerWidth
        };

        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    activateForm = (worker) => {
        const {name, surname} = worker;
        this.props.dispatch(orderActions.userOpenedOrder());
        this.props.dispatch(orderActions.userFormedOrder({name, surname}));
    };

    componentDidMount() {
        console.log('hello', process.env);
        this.state.classNames === "main homepage is-loading" ?
            this.setState({classNames: "main homepage"}) : null;
        window.addEventListener('resize', this.handleResize);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { bestWorkers, bestWorks} = this.props.query;
        const { windowWidth } = this.state;
        const slidesToShow = windowWidth <= 600 ? 1
            : windowWidth <= 800 ? 2
            : 3;

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true
        };

        return (
           <main className={this.state.classNames}>
               <div className="slogan">
                   <div className="repair">
                       <span className="animated fadeIn">Ремонт</span>
                   </div>
                   <div className="easy">
                       <span className="animated bounceInUp">легко</span>
                   </div>
               </div>
               <div className="best">
                   <h2 className="heading-block">Кращі роботи</h2>
                   <Slider {...settings}>
                       {
                           bestWorks.map((work, i) => {
                               return (
                                    <div key={'work' + i}>
                                        <div className="slide-holder">
                                            <div className="slide-middle">
                                                <img className="photo" src={work.photo} alt=""/>
                                            </div>
                                            <p>{work.text}</p>
                                            <div className="slide-bottom">
                                                <span className="votes"><Icon name="fa fa-thumbs-up"/>{work.votes}</span>
                                                <span className="worker">{work.worker.fullName()}</span>
                                            </div>
                                        </div>
                                    </div>
                               );
                           })
                       }
                   </Slider>
               </div>
                <div className="best">
                    <h2 className="heading-block">Кращі майстри</h2>
                    <Slider {...settings}>
                        {
                            bestWorkers.map((worker, i) => {
                                const months = Math.floor((new Date() - new Date(worker.experience)) / 1000 / 60 / 60 / 60 / 30);
                                return (
                                    <div key={'worker' + i}>
                                        <div className="slide-holder">
                                            <div className="slide-top">
                                                <Avatar photo={worker.photo} />
                                                <div className="specialization-holder">
                                                    {
                                                        worker.skills.map(skill => {
                                                            return <div className="skill" key={i + Math.random()}>{skill}</div>;
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="slide-middle">
                                                <Rate rate={worker.rate} />
                                            </div>
                                            <div className="slide-bottom masters">
                                                <span className="city">{worker.city}</span>
                                                <span className="name">{worker.name + " " + worker.surname}</span>
                                            </div>
                                            <div className="button-holder">
                                                <div className="counts">
                                                    <span className="counts-works">
                                                        <span>{worker.works}</span>проектів
                                                    </span>
                                                    <span className="counts-months">
                                                        <span>{months}</span>місяців
                                                    </span>
                                                </div>
                                                <Field
                                                    name="activateForm"
                                                    clickHandler={()=> {this.activateForm(worker)}}
                                                    text="Замовити"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
           </main>
        );
    }
}

export default connect(store => ({...store}))(Home);