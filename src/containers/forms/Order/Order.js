import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import Field from '../../../components/Field';
import Alert from '../../../components/Alert';

import { orderActions } from '../../../actions';
import { PHRASES } from '../../../constants';

const initialState = {
    startDate: null,
    endDate: null,
    city: "Всі",
    work: null,
    email: '',
    phone: '',
    show: ''
};

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {...this.props.order };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onCloseForm = (e) => {
        e.preventDefault();
        this.props.dispatch(orderActions.userClosedOrder());
        this.setState(initialState);
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.dispatch(orderActions.userFormedOrder(this.state));
        this.props.dispatch(orderActions.userSubmittedOrder());
        this.setState({show: "show"});
        setTimeout( () => {
            this.setState(initialState);
            this.props.dispatch(orderActions.userClosedOrder());
        }, 3000);
    };

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    render() {
        const { isOrderOpened, number, name, surname } = this.props.order;

        const alert = PHRASES.successOrder + " Номер замовлення: " + number;

        if (isOrderOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return (
            <div>
                <div
                    className={isOrderOpened ? "form-wrap active" : "form-wrap"}
                    onClick={this.onCloseForm}
                />
                <form className={isOrderOpened ? "form-order active" : "form-order"}>
                    <fieldset>
                        <Alert type="info" text={alert} className={this.state.show} />
                        <Field name="close" clickHandler={this.onCloseForm} />
                        <h2>Замовлення ремонту</h2>
                        <p className="master-info">Майстер: {name} {surname}</p>
                        <p>Оберіть період ремонту:</p>
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            startDatePlaceholderText="Початок"
                            endDatePlaceholderText="Кінець"
                            orientation="vertical"
                        />
                        <p>Оберіть місто</p>
                        <Field name="city" changeHandler={this.onChange} value={this.state.city} />
                        <Field
                            name="email"
                            changeHandler={this.onChange}
                            value={this.state.email}
                        />
                        <Field
                            name="phone"
                            changeHandler={this.onChange}
                            value={this.state.phone}
                        />
                        <Field name="submit" submitHandler={this.onSubmit} text="Замовити" />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default connect(store => ({...store}))(Order);