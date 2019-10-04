import React from 'react';
import RoomSummary from './RoomSummary';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const RoomList = ({rooms}) => {
    return (
        <Container fluid={true} className="position-absolute" style={{top:"553px",zIndex:999,padding:"0 10%"}}>
            <Row>
                {rooms.map((room)=>(
                    <RoomSummary key={room.id} {...room}/>
                ))}
            </Row>
        </Container>
    );
};

export default RoomList;