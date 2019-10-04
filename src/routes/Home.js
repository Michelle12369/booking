import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'react-bootstrap';
import { fetchAllRooms } from '../store/actions/roomActions';
import HomeBanner from '../components/banner/HomeBanner';
import RoomList from '../components/room/RoomList';

class Home extends Component {
    componentDidMount() {
        this.props.getAllRooms();
    }

    render() {
        const { rooms } = this.props;
        if (rooms) {
            return (
                <div className="position-relative">
                    <HomeBanner rooms={rooms}></HomeBanner>
                    <RoomList rooms={rooms}></RoomList>
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
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
}

const mapDispatchToProps = dispatch => {
    return { getAllRooms: () => dispatch(fetchAllRooms()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);