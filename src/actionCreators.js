import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

function removePost(message) {
    return {
        type: 'REMOVE',
        message
    };
}

function fetchPosts(titles) {
    return {
        type: 'FETCH_POSTS',
        titles
    };
}

function fetchPostInfo(post) {
    return { 
        type: 'FETCH_INFO',
        post
    };
}

function handleError(error) {
    return {
        type: 'ERROR',
        error
    };
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