import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogContext from './BlogContext' 

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const { blogs } = useContext(BlogContext)
    
    useEffect(() => {
        function loadBlog(){
            let targetPost = blogs.filter(b => b.id === parseInt(id))
            setPost(targetPost[0])
        }
        loadBlog()
    }, [])
    
    if(!post) { return <h1>404 oops this blog post wasn't found!</h1>}

    return (
        <div>
            <h2 className="title">{post.title}</h2>
            <p className="font-italic">{post.description}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;