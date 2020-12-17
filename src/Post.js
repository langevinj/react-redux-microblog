import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BlogContext from './BlogContext' 
import NewPost from './NewPost'
import CommentForm from './CommentForm'
import PostDisplay from './PostDisplay'
import { useSelector, useDispatch } from 'react-redux'

function Post() {
    const { id } = useParams();
    const posts = useSelector(st => st.posts)
    //set the current post to the post from the id
    const currentPost = posts ? posts[id] : null
    const [editView, setEditView] = useState(false)
    const history = useHistory()

    if (!currentPost) { return <h1>404 oops this blog post wasn't found!</h1> }

    const toggleEditView = (evt) => {
        setEditView(!editView)
    }

    // const [post, setPost] = useState(null)
    // const { blogs, setBlogs } = useContext(BlogContext)
    

    // useEffect(() => {
    //     function loadBlog(){
    //         if(blogs){
    //             let targetPost = blogs.filter(b => b.id === `${id}`)
    //             setPost(targetPost[0])
    //         }
    //     }
    //     loadBlog()
    // }, [])
    
    

    

    // const deleteBlog = (evt) => {
    //     evt.preventDefault();
    //     if(blogs){
    //         console.log(blogs)
    //         setBlogs(blogs.filter(b => b.id !== `${evt.target.parentNode.id}`))
    //     }
    //     history.push("/")
    // }

    // const deleteComment = (evt) => {
    //     evt.preventDefault();
    //     setBlogs(post.comments.length > 0 ? blogs.map(blog => (blog.id !== `${evt.target.parentNode.id}` ? blog : { ...blog, comments: blog.comments.filter(c => c.id !== `${evt.target.id}`)})) : blogs)
    //     //kind of hacky way to remove the button but it works
    //     evt.target.parentNode.remove();
    // }

    const deleteComment = () => {}
    const deleteBlog = () => {}
    return (
        <div>
            {!editView ? (<>
                <PostDisplay post={currentPost} toggleEditView={toggleEditView} deleteBlog={deleteBlog}/>
                <h3 className="border-top">Comments:</h3>
                {currentPost.comments ? currentPost.comments.map(comment => <div key={comment.id} id={currentPost.id}><button className="btn fas fa-times text-danger" onClick={deleteComment} id={comment.id}></button><p>{comment.text}</p></div>) : <p className="text-secondary font-italic">No comments on this post yet</p>}</>) : null}
                {/* {post.id ? <CommentForm post={post} /> : null}
            </>) : <NewPost post={post}/>} */}
        
        </div>
    )
}

export default Post;