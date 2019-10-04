import React from 'react';
import { Row, Col } from 'react-bootstrap';

import style from './RoomBanner.module.scss';


const RoomBanner = ({ imageUrl }) => {
    return (
        <Row>
            <Col md={8} className="px-0">
                <div className={`${style['banner__image']} ${style['banner__image--first']}`} style={{ backgroundImage: `url(${imageUrl[0]})` }}></div>
            </Col>
            <Col md={4} className="px-0">
                <div className={`${style['banner__image']} ${style['banner__image--others']}`} style={{ backgroundImage: `url(${imageUrl[1]})` }}></div>
                <div className={`${style['banner__image']} ${style['banner__image--others']}`} style={{ backgroundImage: `url(${imageUrl[2]})` }}></div>
            </Col>
        </Row>
    );
};

export default RoomBanner;