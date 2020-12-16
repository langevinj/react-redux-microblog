import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState()

    if(!id) { return <h1>404 oops this blog post wasn't found!</h1>}

    return (
        <div>
            
        </div>
    )
}

export default Post;