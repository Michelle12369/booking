const roomDeleteReducer = (state = "", action) => {
    switch (action.type) {
        case "DELETE_RESERVATION":
            console.log('delete success')
            return "delete_success"
        case "DELETE_RESERVATION_ERROR":
            return "delete_error"
        default:
            return state
    }
}

export default roomDeleteReducer