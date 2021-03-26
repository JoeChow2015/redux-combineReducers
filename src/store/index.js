import { createStore, combineReducers } from 'redux'

import { userReducer } from '../reducers/userReducer'
import { proReducer } from '../reducers/proReducer'

const reducer = combineReducers({
    user: userReducer,
    pro: proReducer
})

export default createStore(reducer)