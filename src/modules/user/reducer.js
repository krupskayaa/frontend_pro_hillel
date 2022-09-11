import { SET_LOGIN, USER_INFO } from "./type";

const defaultState = {
    login: JSON.parse(localStorage.getItem("login")) || '',
    info: {},
};

const reducerUser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOGIN: 
            return {...state, login: action.payload}
        case USER_INFO:
            return {...state, info: action.payload}
        default: return state
    }
};


export {reducerUser};