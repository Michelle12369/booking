import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import roomDetailsReducer from './roomDetailsReducer';
import roomPostReducer from './roomPostReducer';
import roomDeleteReducer from './roomDeleteReducer';
import showModalReducer from './showModalReducer';

export default combineReducers({
    rooms: roomReducer,
    roomDetails: roomDetailsReducer,
    booking: roomPostReducer,
    delete: roomDeleteReducer,
    showModal: showModalReducer
})