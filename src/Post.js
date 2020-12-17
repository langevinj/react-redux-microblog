import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BlogContext from './BlogContext' 
import NewPost from './NewPost'

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const { blogs, setBlogs } = useContext(BlogContext)
    const [editView, setEditView] = useState(false)
    const history = useHistory()

    useEffect(() => {
        function loadBlog(){
            if(blogs){
                let targetPost = blogs.filter(b => b.id === parseInt(id))
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
            setBlogs(blogs.filter(b => b.id !== parseInt(evt.target.parentNode.id)))
        }
        history.push("/")
    }

    return (
        <div>
            {!editView ? (<>
                <div className="post-header" id={post.id}>
                    <h2 className="title">{post.title}</h2>
                    <button className="btn" onClick={toggleEditView}><i className="fas fa-edit text-primary mr-3"></i></button>
                    <button className="btn" onClick={deleteBlog}><i className="fas fa-times text-danger"></i></button>
                </div>
                <p className="font-italic">{post.description}</p>
                <p>{post.body}</p>
            </>) : <NewPost post={post}/>}
        </div>
    )
}

export default Post;