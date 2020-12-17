import React from 'react' 

function PostDisplay({ post = null, toggleEditView = () => {}, deleteBlog = () => {} }) {
    return (
        <>
        {post ? (<><div className="post-header" id={post.id}>
                <h2 className="title">{post.title}</h2>
                <button className="btn fas fa-edit text-primary mr-3" onClick={toggleEditView}></button>
                <button className="btn fas fa-times text-danger" onClick={deleteBlog}></button>
        </div>
            <p className="font-italic">{post.description}</p>
            <p>{post.body}</p></>) : null}
        </>
    )
}

export default PostDisplay;