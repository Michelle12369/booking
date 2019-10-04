import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Col,  Row } from 'react-bootstrap';
import style from './ReservationModal.module.scss';

const ReserveSuccess = (props) => {
    return (
        <React.Fragment>
            <Modal.Header className={style['modal__title']} >
                <Modal.Title id="modal-title">
                    預約成功
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1" /></svg>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={style['modal__body']}>
                <div className={style['modal__content']}><FontAwesomeIcon icon={faCalendarCheck} color="#484848" size="3x" /></div>
                <Row className={style['modal__btns']}>
                    <Col className="text-right">
                        <Button className={style["modal__btn-submit"]} onClick={() => props.showModal(false)}>
                            回頁面
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </React.Fragment>
    );
};

export default ReserveSuccess;