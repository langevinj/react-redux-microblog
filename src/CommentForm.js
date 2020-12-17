import React, { useState, useContext } from 'react'
import BlogContext from './BlogContext'

function CommentForm({ post=null }){
    const [newComment, setNewComment] = useState("");
    const { setBlogs } = useContext(BlogContext)

    const handleChange = (evt) => {
        //check this over
        setNewComment(evt.target.value)
    }

    const handleSubmit = (evt) => {
        !post.comments ? setBlogs(blogs => blogs.map(blog => blog.id === post.id ? {...blog, comments: [newComment]}: blog)) : 
            setBlogs(blogs => blogs.map(blog => blog.id === post.id ? { ...blog, comments: [...blog.comments, newComment] } : blog))
    }

    return (
        <form className="text-left" onSubmit={handleSubmit}>
            <div className="form-group">
                <input className="form-control" name="newComment" id="newComment" value={newComment} onChange={handleChange} placeholder="New Comment"></input>
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default CommentForm;