const roomReducer = (state = null, action) => {
    switch(action.type){
        case 'GET_ALL_ROOMS':
            console.log('success')
            return action.data
        case 'GET_ROOMS_ERROR':
            console.log('error')
            return state
        default:
            return state
    }
}





export default roomReducer