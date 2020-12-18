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
    const posts = useSelector(st => st.posts)
    //set the current post to the post from the id
    
    const [editView, setEditView] = useState(false)
    const history = useHistory()

    // useEffect(() => {
    //     dispatch(fetchPostInfoFromApi(id));
    // }, [dispatch])

    const currentPost = posts ? posts[id] : null

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
            {currentPost ? !editView ? (<>
                <PostDisplay postid={id} toggleEditView={toggleEditView} deleteBlog={deleteBlog}/>
                <h3 className="border-top">Comments:</h3>
                <CommentList deleteComment={deleteTargetComment} /><CommentForm addComment={addNewComment} /></>) : <PostForm post={currentPost} editBlog={editBlog}/> : <></>}
        </div>
    )
}

export default Post;