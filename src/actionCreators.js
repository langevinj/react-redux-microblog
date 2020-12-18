import axios from 'axios';
import { ADD, EDIT, REMOVE, ADDCOMMENT, DELETECOMMENT, FETCH_INFO, FETCH_POSTS, ERROR, FETCH_COMMENTS } from './actionTypes'

const API_URL = 'http://localhost:5000/api'

function addPost(post) {
    return {
        type: ADD,
        post
    };
}

function editPost(post) {
    return {
        type: EDIT,
        post
    };
}

function removePost(message) {
    return {
        type: REMOVE,
        message
    };
}

function fetchPosts(titles) {
    return {
        type: FETCH_POSTS,
        titles
    };
}

function fetchPostInfo(post) {
    return { 
        type: FETCH_INFO,
        post
    };
}

function fetchPostComments(comments) {
    return {
        type: FETCH_COMMENTS,
        comments
    }
}

function addComment(comment) {
    return {
        type: ADDCOMMENT,
        comment
    }
}

function handleError(error) {
    return {
        type: ERROR,
        error
    };
}

export function addPostToApi(post) {
    return async function thunk(dispatch) {
        try {
            let res = await axios.post(`${API_URL}/posts/`, {title: post.title, description: post.description, body: post.body});
            dispatch(addPost(res.data));
        } catch (error) {
            dispatch(handleError(error.response.data));
        }
    }
}

export function editPostInApi(post) {
    return async function thunk(dispatch) {
        try {
            let res = await axios.put(`${API_URL}/posts/${post.id}`, { title: post.title, description: post.description, body: post.body });
            dispatch(editPost(res.data))
        } catch (error) {
            dispatch(handleError(error.response.data));
        }
    }
}

export function removePostFromApi(id) {
    return async function thunk(dispatch) {
        try {
            let res = await axios.delete(`${API_URL}/posts/${id}`);
            dispatch(removePost(res.message));
        } catch (error) {
            dispatch(handleError(error.response.data));
        }
    }
}

export function fetchPostsFromApi() {
    return async function thunk(dispatch) {
        try {
            let posts = await axios.get(`${API_URL}/posts`);
            dispatch(fetchPosts(posts.data));
        } catch (error) {
            dispatch(handleError(error.response.data));
        }
    }
}

export function fetchPostInfoFromApi(id) {
    return async function thunk(dispatch) {
        try {
            let post = await axios.get(`${API_URL}/posts/${id}`);
            dispatch(fetchPostInfo(post.data));
        } catch (error) {
            dispatch(handleError(error.response.data));
        }
    }
}

export function fetchCommentsForPost(id) {
    return async function thunk(dispatch) {
        try {
            let comments = await axios.get(`${API_URL}/posts/${id}/comments`);
            dispatch(fetchPostComments(comments.data));
        } catch (error) {
            dispatch(handleError(error.response.data)); 
        }
    }
}

export function addCommentInApi(id, text) {
    return async function thunk (dispatch) {
        try {
            let comment = await axios.post(`${API_URL}/posts/${id}/comments`, { text: text })
            dispatch(addComment(comment.data))
        } catch (error) {
            dispatch(handleError(error.response.data)); 
        }
    }
}

