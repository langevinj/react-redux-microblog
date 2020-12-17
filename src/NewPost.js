import React  from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addPost } from './actions'
import PostForm from './PostForm'

function NewPost({ post = {} }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const addNewPost = (post) => {
        dispatch(addPost(post))
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