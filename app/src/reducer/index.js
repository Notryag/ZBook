import { combineReducers } from 'redux'
import { HomeReducer } from './homeReducer'
import { counterReducer } from './countReducer'
const rootReducers =  combineReducers({
    home:HomeReducer,
    count:counterReducer
})

export default rootReducers;

