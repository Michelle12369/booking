import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import ReserveTime from './ReserveTime';
import ReserveFail from './ReserveFail';
import ReserveSuccess from './ReserveSuccess';
import { changeBookingStatus, deleteReservation, showModal } from '../../store/actions/roomActions';
import style from './ReservationModal.module.scss';

class ReservationModal extends Component {
    render() {
        const { booking, modalshowed, returnToReserve, deleteReservation, showModal } = this.props;
        let reserveContent = null;
        if (booking && booking.status === 'success') {
            reserveContent = <ReserveSuccess showModal={showModal} />
        } else if (booking && booking.status === 'fail') {
            reserveContent = <ReserveFail />
        } else {
            reserveContent = <ReserveTime showModal={showModal} />
        }
        return (
            <div>
                <Container className={style["modal__btns"]}>
                    <Row>
                        <Col>
                            <Button className={style["modal__btn-submit"]} onClick={() => {
                                showModal(true)
                                returnToReserve()
                            }}>預約時段</Button>
                        </Col>
                        <Col>
                            <Button className={style["modal__btn-submit"]} onClick={() => {
                                deleteReservation()
                                window.location.reload()
                            }}>清除所有預約</Button>
                        </Col>
                    </Row>
                </Container>
                <Modal
                    show={modalshowed}
                    onHide={() => showModal(false)}
                    aria-labelledby="modal-title"
                >
                    {reserveContent}
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    booking: state.booking,
    modalshowed: state.showModal
});

const mapDispatchToProps = dispatch => ({
    returnToReserve: () => dispatch(changeBookingStatus()),
    deleteReservation: () => dispatch(deleteReservation()),
    showModal: (showed) => dispatch(showModal(showed))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReservationModal));