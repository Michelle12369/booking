import React from 'react';
import style from './RoomSummary.module.scss';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const RoomSummary = (props) => {
        return (
            <Col md={4}>
                <Link to={`/room/${props.id}`}>
                    <div className={style['summary']}>
                        <div className={style['summary__image']} style={{ backgroundImage: `url(${props.imageUrl})` }} src={props.imageUrl} />
                        <Container className={style['summary__content']}>
                            <div className={style['summary__name']}>{props.name}</div>
                            <Row>
                                <Col xs={6} className={style['summary__price']}>
                                    <span className={style['summary__normal-price']}>NT.{props.normalDayPrice} </span>平日
                                </Col>
                                <Col xs={6} className={`${style['summary__price']} ${style['summary__holiday-price']}`}>
                                    NT.{props.holidayPrice}假日
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Link>
            </Col >
        );
};

export default RoomSummary;