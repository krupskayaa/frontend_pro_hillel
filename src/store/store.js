import {combineReducers, createStore} from "redux";
import { reducerNews } from "../modules/news/reducer";
import { reducerUser } from "../modules/user/reducer";

const allReducer = combineReducers({
    news: reducerNews,
    users: reducerUser,
})

const store = createStore(allReducer)

export default store;