const initState = {
    status: 'time',
    data: null
}

const roomPostReducer = (state = initState, action) => {
    switch (action.type) {
        case 'POST_ROOM':
            console.log('success post room')
            return {
                status: 'success',
                data: action.data.booking
            }

        case 'POST_ROOM_ERROR':
            console.log(action.message)
            return {
                status: 'fail',
                data: null
            }
        case 'SET_POST_FAILURE':
            return {
                status: 'time',
                data: null
            }
        default:
            return state
    }
}

export default roomPostReducer