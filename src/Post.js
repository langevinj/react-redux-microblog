import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import PostDisplay from './PostDisplay'
import PostForm from './PostForm'
import { fetchPostInfoFromApi, removePostFromApi, editPostInApi, fetchCommentsForPost, addCommentInApi, deleteCommentInApi, voteOnPostApi } from './actionCreators'
import { useSelector, useDispatch } from 'react-redux'

/**Gets post data from API, if present
 * handles edit form
 * handles adding a comment
 * handles comment and post deletion
 * handles votes
 */

function Post() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(st => st.posts);
    const comments = useSelector(st => st.posts.comments)
    const titles = useSelector(st => st.titles)
    const [editView, setEditView] = useState(false)
    const [toggler, setToggler] = useState(true)

    //get the info on the post from the API
    useEffect(() => {
        dispatch(fetchPostInfoFromApi(id));
    }, [dispatch, editView, toggler])

    useEffect(() => {
        dispatch(fetchCommentsForPost(id));
    }, [dispatch, toggler])

    const history = useHistory()

    //toggle the editting view of a post
    const toggleEditView = () => {
        setEditView(!editView)
    }

    //delete a blog post by id
    const deleteBlog = (evt) => {
        evt.preventDefault();
        dispatch(removePostFromApi(id));
        history.push("/")
    }

    //save changes to a blog post
    const editBlog = (edittedPost) => {
        dispatch(editPostInApi(edittedPost))
        toggleEditView();
    } 

    //delete a particular comment
    const deleteTargetComment = (evt) => {
        evt.preventDefault();
        console.log(evt.target.id)
        dispatch(deleteCommentInApi(post.id, evt.target.id))
        setToggler(!toggler)
    }

    //add a comment to a post
    const addNewComment = (comment) => {
        dispatch(addCommentInApi(post.id, comment))
        setToggler(!toggler)
    }

    const handleVote = (evt) => {
        evt.preventDefault();
        dispatch(voteOnPostApi(evt.target.parentNode.id, evt.target.id));
        setToggler(!toggler)
    }

    return (
        <div>
            {post ? !editView ? (<>
                <PostDisplay post={post} toggleEditView={toggleEditView} deleteBlog={deleteBlog} handleVote={handleVote}/>
                <h3 className="border-top">Comments:</h3>
                <CommentList comments={comments} deleteComment={deleteTargetComment} /><CommentForm addComment={addNewComment} /></>) : <PostForm post={post} editBlog={editBlog}/> : <></>}
        </div>
    )
}

export default Post;