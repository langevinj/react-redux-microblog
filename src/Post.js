import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { removePost, editPost, addComment, deleteComment} from './actions'
import {v4 as uuid} from 'uuid'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import PostDisplay from './PostDisplay'
import PostForm from './PostForm'
import { fetchPostInfoFromApi } from './actionCreators'
import { useSelector, useDispatch } from 'react-redux'

function Post() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(st => st.posts);

    //get the info on the post from the API
    useEffect(() => {
        dispatch(fetchPostInfoFromApi(id));
    }, [dispatch])

    const [editView, setEditView] = useState(false)
    const history = useHistory()

    //toggle the editting view of a post
    const toggleEditView = () => {
        setEditView(!editView)
    }

    //delete a blog post by id
    const deleteBlog = (evt) => {
        evt.preventDefault();
        dispatch(removePost(evt.target.parentNode.id))
        history.push("/")
    }

    //save changes to a blog post
    const editBlog = (edittedPost) => {
        dispatch(editPost(edittedPost));
        toggleEditView();
    } 

    //delete a particular comment
    const deleteTargetComment = (evt) => {
        evt.preventDefault();
        dispatch(deleteComment(id, evt.target.id))
    }

    //add a comment to a post
    const addNewComment = (comment) => {
        dispatch(addComment(id, {text: comment, id: uuid() }))
    }

    return (
        <div>
            {post ? !editView ? (<>
                <PostDisplay post={post} toggleEditView={toggleEditView} deleteBlog={deleteBlog}/>
                <h3 className="border-top">Comments:</h3>
                <CommentList comments={post.comments} deleteComment={deleteTargetComment} /><CommentForm addComment={addNewComment} /></>) : <PostForm post={post} editBlog={editBlog}/> : <></>}
        </div>
    )
}

export default Post;