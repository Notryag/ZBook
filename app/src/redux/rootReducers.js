import article from './article/reducer'
import user from './user/reducer'
import { combineReducers } from "redux";


export default combineReducers({
    article,
    user
})



