const showModalReducer = (state = false, actions) => {
    switch(actions.type){
        case 'SET_MODAL':
            return actions.showed
        default:
            return state
    }
}

export default showModalReducer