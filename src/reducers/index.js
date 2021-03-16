import { combineReducers } from "redux";
import users, {findAllCustomer} from './customerReducer'

// export default combineReducers({
//     users
// })

const rootReducer = combineReducers({
    findAllCustomer
})

export default rootReducer;