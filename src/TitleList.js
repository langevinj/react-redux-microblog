import React from 'react' 
import { Link } from 'react-router-dom'

function TitleList({ blogs = null }){
    
    return (
        <ul>
            {blogs ? blogs.map(blog => <li className="blogCard container w-25 border rounded bg-light m-2 d-inline-block p-3"><Link to={`/posts/${blog.id}`}><p>{blog.title}</p></Link><p>{blog.description}</p></li>) : null}
        </ul>
    )
}

export default TitleList;