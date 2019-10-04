import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Modal, Button, Col, Form, Row } from 'react-bootstrap';
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import style from './ReservationModal.module.scss';
import { postRoom } from '../../store/actions/roomActions';

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
moment.locale('zh-cn');

class ReserveTime extends Component {
    state = {
        showPicker: false,
        name: '',
        tel: '',
        startDate: null,
        endDate: null,
        focusedInput: "startDate",
        holidays: 0,
        normalDays: 0
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, tel, startDate, endDate } = this.state;
        const room_id = this.props.room_id;
        let date = [];
        let currDate = startDate.clone();
        while (currDate.diff(endDate) < 0) {
            date.push(currDate.format('YYYY-MM-DD'));
            currDate.add(1, 'days');
        }
        const data = { room_id, name, tel, date }
        this.props.postRoom(data);
    }

    handleDatesChange = ({ startDate, endDate }) => {
        let holidays = 0;
        let normalDays = 0;
        if (startDate && endDate) {
            const days = endDate.diff(startDate, 'days')
            let sd = startDate.clone()
            for (let i = 0; i <= days - 1; i++) {
                const d = sd.add(1, 'd').day() % 6;
                ((d <= 5) && (d >= 2)) ? (normalDays += 1) : (holidays += 1);
            }
        }
        this.setState({ holidays, normalDays, startDate, endDate })
    }

    render() {
        const { name, tel, focusedInput, startDate, endDate, showPicker, holidays, normalDays } = this.state;
        const { normalDayPrice, holidayPrice } = this.props;
        return (
            <React.Fragment>
                <Modal.Header className={style['modal__title']} >
                    <Modal.Title id="modal-title">
                        預約時段
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={style['modal__body']}>
                    <Form>
                        <div className={style['modal__form-group']}>
                            <Form.Group controlId="name" as={Row}>
                                <Form.Label column sm="3">姓名</Form.Label>
                                <Col sm="9">
                                    <Form.Control required type="text" value={name} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="tel" as={Row}>
                                <Form.Label column sm="3">電話</Form.Label>
                                <Col sm="9">
                                    <Form.Control required type="phone" value={tel} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formDate" as={Row}>
                                <Form.Label column sm="3">預約起迄</Form.Label>
                                <Col sm="4"><Form.Control type="text" name="start date" value={startDate ? startDate.format('YYYY/MM/DD') : ''} readOnly onClick={() => this.setState({ showPicker: true })} /></Col>
                                <Col sm="1">~</Col>
                                <Col sm="4"><Form.Control type="text" name="end date" value={endDate ? endDate.format('YYYY/MM/DD') : ''} readOnly onClick={() => this.setState({ showPicker: true })} /></Col>
                                <Col sm={{ span: 9, offset: 3 }} >
                                    {showPicker && (<DayPickerRangeController
                                        startDate={startDate}
                                        endDate={endDate}
                                        onDatesChange={this.handleDatesChange}
                                        focusedInput={focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput: !focusedInput ? "startDate" : focusedInput })}
                                        initialVisibleMonth={() => moment()}
                                        onOutsideClick={() => this.setState({ showPicker: false })}
                                        isOutsideRange={day => day.isBefore(moment()) || day.isAfter(moment().add(90, 'd'))}
                                    />)}
                                </Col>
                            </Form.Group>
                        </div>
                        <Row className={style['modal__night-count']}>
                            <Col className='px-0' sm='9'>平日時段</Col>
                            <Col sm='3' className="px-0 text-right">{normalDays}夜</Col>
                            <Col className='px-0' sm='9'>假日時段</Col>
                            <Col sm='3' className="px-0 text-right">{holidays}夜</Col>
                        </Row>
                        <Row className={style['modal__price']}>
                            <Col> = NT. {normalDayPrice * normalDays + holidayPrice * holidays} </Col>
                        </Row>
                        <Row className={style['modal__btns']}>
                            <Col>
                                <Button className={style["modal__btn-cancel"]} onClick={() => this.props.showModal(false)}>
                                    取消
                                </Button>
                            </Col>
                            <Col className="text-right">
                                <Button type="submit" className={style['modal__btn-submit']} onClick={this.handleSubmit}>
                                    確定預約
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        normalDayPrice: state.roomDetails.normalDayPrice,
        holidayPrice: state.roomDetails.holidayPrice,
        room_id: state.roomDetails.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postRoom: (data) => dispatch(postRoom(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReserveTime);