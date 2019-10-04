import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import { Container } from 'react-bootstrap';
import style from './Datepicker.module.scss';
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ReservationModal from '../reservation/ReservationModal';
import { showModal } from '../../store/actions/roomActions'


ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
	reactDates: {
		...DefaultTheme.reactDates,
		color: {
			...DefaultTheme.reactDates.color,
			background: '#F7F7F7',
		},
	},
});

class Datepicker extends Component {
	state = {
		focused: true
	}
	render() {
		moment.locale('zh-cn');
		let dates = null;
		const { booking, showModal } = this.props;
		if (booking.data) {
			dates = booking.data.map((i) => i.date)
		}
		return (
			<Container className={style.datepicker}>
				<DayPickerSingleDateController
					daySize={45}
					numberOfMonths={1}
					monthFormat="YYYY / MM"
					onDateChange={date => showModal(true)}
					isDayBlocked={day => dates && day.isBetween(moment(dates[0]).add(-1, 'd'), moment(dates.slice(-1)[0]).add(2, 'd'))}
					focused={this.state.focused}
					onFocusChange={({ focused }) => this.setState({ focused })}
					isOutsideRange={day => day.isBefore(moment()) || day.isAfter(moment().add(90, 'd'))}
				/>
				<ReservationModal></ReservationModal>

			</Container>
		);
	}
};

const mapStateToProps = state => ({
	booking: state.booking
})

const mapDispatchToProps = dispatch => ({
	showModal: (showed) => dispatch(showModal(showed))
})



export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);