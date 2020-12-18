import React from 'react' 
import VotingButtons from './VotingButtons'

function PostDisplay({ post = null, toggleEditView = () => {}, deleteBlog = () => {} }) {
    return (
        <>
        {post ? (<><div className="post-header" id={post.id}>
                <h2 className="title">{post.title}</h2>
                <button className="btn fas fa-edit text-primary mr-3" onClick={toggleEditView}></button>
                <button className="btn fas fa-times text-danger" onClick={deleteBlog}></button>
                <VotingButtons count={post.votes}/>
        </div>
            <p className="font-italic">{post.description}</p>
                <p>{post.body}</p></>) : <h1>404 oops this blog post wasn't found!</h1>}
        </>
    )
}

export default PostDisplay;