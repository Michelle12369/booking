import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import style from './ReservationModal.module.scss';
import { changeBookingStatus } from '../../store/actions/roomActions'

const ReserveFail = (props) => {
    return (
        <React.Fragment>
            <Modal.Header className={style['modal__title']} >
                <Modal.Title id="modal-title">
                    預約失敗
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={style['modal__body']}>
                <div className={style['modal__content']}>預約時段可能已經被人預定</div>
                <Row className={style['modal__btns']}>
                    <Col className="text-right">
                        <Button className={style["modal__btn-submit"]} onClick={() => props.returnToReserve()}>
                            返回
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    returnToReserve: () => dispatch(changeBookingStatus())
})

export default connect(null, mapDispatchToProps)(ReserveFail);