import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faPhoneSquareAlt, faMountain, faUtensils, faWind, faSmokingBan, faGlassMartiniAlt,  faFan, faChild, faUserTie, faCouch, faDog} from '@fortawesome/free-solid-svg-icons';

import style from './RoomDetails.module.scss';

const RoomDetails = (props) => {
    const icons = [faWifi, faPhoneSquareAlt, faMountain, faUtensils, faWind, faSmokingBan, faGlassMartiniAlt,  faFan, faChild, faUserTie, faCouch, faDog];
    const iconColor = Object.keys(props.amenities).map((key)=> (props.amenities[key])?'black':'lightgrey')
    const iconText = ['Wi-Fi', '電話', '漂亮的視野', '早餐', '空調', '禁止吸菸', 'Mini Bar', '冰箱', '適合兒童', 'Room Service', '沙發', '寵物攜帶']

    return (
        <Container className={style['room']}>
            <Row className={style['room__title']}>
                <Col><h3>{props.name}</h3></Col>
                <Col className='text-right'>
                    <div className={style['room__normal-price']}>NT. {props.normalDayPrice}</div>
                    <div className={style['room__date']}>平日(一～四)</div>
                </Col>
            </Row>
            <Row className={style['room__basic']}>
                <Col xs={8}>房客人數限制: {props.descriptionShort.GuestMin} ~ {props.descriptionShort.GuestMax}人</Col>
                <Col className={`${style['room__holiday-price']} text-right`} xs={4}>NT. {props.holidayPrice}</Col>
                <Col xs={8}>床型: {props.descriptionShort.Bed}</Col>
                <Col className={`${style['room__date']} text-right`} xs={4}>假日(五～日)</Col>
                <Col xs={12}>衛浴數量: {props.descriptionShort['Private-Bath']} 間</Col>
                <Col xs={12}>房間大小: {props.descriptionShort.Footage} 平方公尺</Col>
                <Col xs={12}>{props.description}</Col>
                <Col xs={12}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1"/></svg> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1"/></svg> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px"><line x1="0" y1="0" x2="100%" y2="100%" stroke="#000" strokeWidth="1"/></svg> 
                </Col>
            </Row>
            <Row className={style['room__time']}>
                <Col md={6} xs={12}>
                    <div>Check In</div>
                    <div className={style['room__check']}>{props.checkInAndOut.checkInEarly} - {props.checkInAndOut.checkInLate}</div>
                </Col>
                <Col md={6} xs={12}>
                    <div>Check Out</div>
                    <div className={style['room__check']}>{props.checkInAndOut.checkOut}</div>
                </Col>
            </Row>
            <Row className={style['room__supplies']}>
                {icons.map((icon, i)=>(
                    <Col key={iconText[i]} md={4} xs={6} className="mb-3 text-left">
                        <span className={style['room__icon']}><FontAwesomeIcon icon={icon} color={iconColor[i]} size="lg"/></span>
                        <span className={style['room__icon-text']} style={{color: iconColor[i]}}>{iconText[i]}</span>
                    </Col>))
                }
            </Row>
        </Container>
    );
};

export default RoomDetails;