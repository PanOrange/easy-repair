import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { DateRangePicker } from 'react-dates';

import Field from '../../../components/Field';
import { Icon } from '../../../components/Icon';

import { queryActions } from '../../../actions';

const initialState = {
    focusedInput: null,
    startDate: null,
    endDate: null,
    city: 'all',
    work: 'all',
    rate: 5
};

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onSearch = () => {
        const { startDate, endDate, city, work, rate } = this.state;

        this.props.dispatch(queryActions.userSentQuery({
            startDate, endDate, city, work, rate
        }));

        this.setState(initialState);

    };

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    render() {
        return (
            <div className="search">
                <form className={this.props.query.showMobileSearch ? "block" : ""}>
                    <fieldset>
                        <Field name="city" changeHandler={this.onChange} value={this.state.city}  />
                        <Field name="work" changeHandler={this.onChange} value={this.state.work} />
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            startDatePlaceholderText="Початок"
                            endDatePlaceholderText="Кінець"
                        />
                        <Field name="rate" changeHandler={this.onChange} value={this.state.rate} />
                        <Link to="/query">
                            <Field name="search" searchHandler={this.onSearch} text="Пошук" />
                        </Link>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default connect(store => ({...store}))(Search);