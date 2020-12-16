import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const { postid } = useParams();
    console.log(postid)
    const [post, setPost] = useState(null)

    if(!post) { return <h1>404 oops this blog post wasn't found!</h1>}

    return (
        <div>
            
        </div>
    )
}

export default Post;