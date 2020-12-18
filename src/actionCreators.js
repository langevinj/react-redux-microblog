import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

function fetchPosts(posts) {
    return {
        type: 'FETCH_POSTS',
        posts
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