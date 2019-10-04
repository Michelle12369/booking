const roomDetailsReducer = (state = null, action) => {
    switch (action.type) {
        case 'GET_ROOM':
            console.log('success get room')
            return action.data.room[0]
        case 'GET_ROOM_ERROR':
            console.log(action.message)
            return state
        case 'SEND_ROOM_REQUEST':
            return null
        default:
            return state
    }
}




export default roomDetailsReducer