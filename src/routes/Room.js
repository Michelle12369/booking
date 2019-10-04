import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'react-bootstrap';
import RoomBanner from '../components/banner/RoomBanner';
import RoomDetails from '../components/room/RoomDetails';
import Datepicker from '../components/date/Datepicker';

import { fetchRoom } from '../store/actions/roomActions';

class Room extends Component {
    componentDidMount() {
        const room_id = this.props.match.params.room_id;
        this.props.getRoom(room_id);
    }
    render() {
        const { room } = this.props
        if (room) {
            return (
                <div>
                    <RoomBanner imageUrl={this.props.room.imageUrl} />
                    <Row>
                        <Col xs={12} md={8}>
                            <RoomDetails {...this.props.room} />
                        </Col>
                        <Col xs={12} md={4}>
                            <Datepicker></Datepicker>
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
                <Row>
                    <Col className="offset-6 px-0 my-5">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        room: state.roomDetails
    }
}


const mapDispatchToProps = dispatch => ({
    getRoom: (room_id) => dispatch(fetchRoom(room_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Room);

