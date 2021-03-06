import React  from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PostForm from './PostForm'
import {addPostToApi} from './actionCreators'

function NewPost() {
    const history = useHistory();
    const dispatch = useDispatch();

    /** Adds the post and saves it to the backend */
    const addNewPost = (post) => {
        dispatch(addPostToApi(post))
        history.push("/");
    }

    return (
        <div className="container w-50">
            <h2>New Post</h2>
            <PostForm addNewPost={addNewPost}/>
        </div>
    )
}

export default NewPost;