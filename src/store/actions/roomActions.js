import {
    apiFetchRooms,
    apiFetchRoom,
    apiPostRoom,
    apiDeleteReservation
} from '../../helpers/API';

export const fetchAllRooms = () => {
    return (dispatch) => {
        apiFetchRooms().then((data) => {
            dispatch({
                type: 'GET_ALL_ROOMS',
                data: data.items
            })
        }).catch((err) => {
            dispatch({
                type: 'GET_ROOMS_ERROR',
                message: err
            })
        })
    }
}

export const fetchRoom = (room_id) => {
    return (dispatch) => {
        dispatch({
            type: 'SEND_ROOM_REQUEST'
        });
        apiFetchRoom(room_id).then((data) => {
            dispatch({
                type: 'GET_ROOM',
                data
            })
        }).catch((err) => {
            dispatch({
                type: 'GET_ROOM_ERROR',
                message: err
            })
        })
    }
}

export const postRoom = (data) => {
    return (dispatch) => {
        apiPostRoom(data).then((data) => {
            if (data.message) {
                throw new Error(data.message);
            } else {
                dispatch({
                    type: 'POST_ROOM',
                    data
                })
            }
        }).catch((err) => {
            dispatch({
                type: 'POST_ROOM_ERROR',
                message: err
            })
        })
    }
}

export const deleteReservation = () => {
    return dispatch => {
        apiDeleteReservation().then(() => dispatch({
                type: 'DELETE_RESERVATION'
            }))
            .catch(() => dispatch({
                type: 'DELETE_RESERVATION_ERROR'
            }))
    }
}

export const changeBookingStatus = () => ({
    type: 'SET_POST_FAILURE'
})

export const showModal = (showed) => ({
    type: 'SET_MODAL',
    showed
})