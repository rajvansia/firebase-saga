import { combineReducers } from 'redux';
import * as constants from '../actions';

const posts = (state = {posts: []}, action) => {

    switch (action.type) {
        case constants.FETCH_POST:
            return {
                id: action.id
            };
        case constants.POSTS_RECEIVED:
            const posts = action.posts;
            return {
                ...state,
                posts: Object.keys(posts).map(
                    (key) => Object.assign({}, {id: key}, posts[key])
                )
            };
        case constants.POST_RECEIVED:
            return {
                ...state,
                posts: [action.post]
            };
        case constants.CREATE_POST:
            return {
                ...state,
                formData: action.formData
            };
        case constants.POST_CREATED:
            return {
                ...state
            };
        case constants.POST_CREATION_FAILED:
            return {
                ...state,
                error: action.error
            };
        case constants.DELETE_POST:
            return {
                ...state,
                id: action.id
            };
        case constants.POST_DELETED:
            return {
                ...state
            };
        case constants.POST_DELETION_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export const getFormData = (state) => {
    return state.posts.formData;
}

export const getId = (state) => {
    return state.posts.id;
}

export default combineReducers(
    { posts }
);
