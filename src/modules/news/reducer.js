import ADD_NEWS from "./type";

const defaultState = {
    news: [],
};

const reducerNews = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS: 
            return {...state, news: action.payload}
        default: return state
    }
};

export {reducerNews};