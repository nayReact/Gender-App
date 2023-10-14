const usersReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_USER': {
            return [...state, action.payload]
        }
        case 'EDIT_USER' : {
            return state.map (ele => {
                if(ele.id == action.payload.id) {
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }
        case 'REMOVE_USER' : {
            return state.filter(ele => ele.id != action.payload)
        }
        default : {
            return [...state]
        }
    }   
}
export default usersReducer