import {createStore, combineReducers, applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducer'
import thunk from 'redux-thunk'

const configureStroe = () => {
    const store = createStore(combineReducers({
        users: usersReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStroe