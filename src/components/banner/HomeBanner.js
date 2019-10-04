import React from 'react';
import { Carousel } from 'react-bootstrap';
import style from './HomeBanner.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeBanner = ({ rooms }) => {
    return (
        <div className={style['banner-container']}>
            <Carousel controls={false}>
                {rooms.map((room) => (//只能放在這裡，不然另外弄成一個component會錯
                    <Carousel.Item key={room.id} className={style['carousel-item']}>
                        <img
                            className={`d-block w-100 ${style['carousel-image']}`}
                            src={room.imageUrl}
                            alt="First slide"
                        />
                    </Carousel.Item>))
                }
            </Carousel>
            <div className={style['banner-title']}>White Space</div>
            <div className={style['banner-content']}>
                <Row>
                    <Col className="pr-0" xs={2}><FontAwesomeIcon icon={faPhone} flip="horizontal" color="white" size="lg" /></Col>
                    <Col className="pl-0" xs={10}><p>02-17264937</p></Col>
                </Row>
                <Row>
                    <Col className="pr-0" xs={2}><FontAwesomeIcon icon={faEnvelope} color="white" size="lg" /></Col>
                    <Col className="pl-0" xs={10}><p>whitespace@whitespace.com.tw</p></Col>
                </Row>
                <Row>
                    <Col className="pr-0" xs={2}><FontAwesomeIcon icon={faHome} color="white" size="lg" /></Col>
                    <Col className="pl-0" xs={10}><p>台北市羅斯福路十段30號</p></Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeBanner;