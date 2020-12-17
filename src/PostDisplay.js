import React from 'react' 

function PostDisplay({ post }) {

    return (
        <>
        <div className="post-header" id={post.id}>
                <h2 className="title">{post.title}</h2>
                <button className="btn fas fa-edit text-primary mr-3" onClick={toggleEditView}></button>
                <button className="btn fas fa-times text-danger" onClick={deleteBlog}></button>
        </div>
            <p className="font-italic">{post.description}</p>
            <p>{post.body}</p>
        </>
    )
}

export default PostDisplay;