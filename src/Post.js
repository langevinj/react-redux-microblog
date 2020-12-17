import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BlogContext from './BlogContext' 
import NewPost from './NewPost'
import CommentForm from './CommentForm'

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const { blogs, setBlogs } = useContext(BlogContext)
    const [editView, setEditView] = useState(false)
    const history = useHistory()

    useEffect(() => {
        function loadBlog(){
            if(blogs){
                let targetPost = blogs.filter(b => b.id === `${id}`)
                setPost(targetPost[0])
            }
        }
        loadBlog()
    }, [])
    
    if(!post) { return <h1>404 oops this blog post wasn't found!</h1>}

    const toggleEditView = (evt) => {
        setEditView(!editView)
    }

    const deleteBlog = (evt) => {
        evt.preventDefault();
        if(blogs){
            console.log(blogs)
            setBlogs(blogs.filter(b => b.id !== `${evt.target.parentNode.id}`))
        }
        history.push("/")
    }

    const deleteComment = (evt) => {
        evt.preventDefault();
        setBlogs(post.comments.length > 0 ? blogs.map(blog => (blog.id !== `${evt.target.parentNode.id}` ? blog : { ...blog, comments: blog.comments.filter(c => c.id !== `${evt.target.id}`)})) : blogs)
        //kind of hacky way to remove the button but it works
        evt.target.parentNode.remove();
    }

    return (
        <div>
            {!editView ? (<>
                <PostDisplay post={currentPost}/>
                <h3 className="border-top">Comments:</h3>
                {post.comments ? post.comments.map(comment => <div key={comment.id} id={post.id}><button className="btn fas fa-times text-danger" onClick={deleteComment} id={comment.id}></button><p>{comment.text}</p></div>) : <p className="text-secondary font-italic">No comments on this post yet</p>}
                {post.id ? <CommentForm post={post} /> : null}
            </>) : <NewPost post={post}/>}
        </div>
    )
}

export default Post;