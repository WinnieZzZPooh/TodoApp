import { combineReducers } from 'redux';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

const data = (state = {}) => {
    return state;
};

//метод. меняющий store
const reddit = (state = [
    {name: 'demo'},
    {name: 'hello'}
], action) => {
    switch (action.type){
        case FETCH_POSTS:
            return state;
        case FETCH_POSTS_COMPLETE:
            return action.payload;
        default:
            return state;
    }
};

export const reducer = combineReducers({reddit, data});