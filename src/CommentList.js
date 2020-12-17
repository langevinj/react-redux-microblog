import React from 'react' 

function CommentList({ comments = [], deleteComment = () => {} }) {

    return (
        <>
            {comments.length > 0 ? comments.map(comment => <div key={comment.id}><button className="btn fas fa-times text-danger" onClick={deleteComment} id={comment.id}></button><p>{comment.text}</p></div>) : <p className="text-secondary font-italic">No comments on this post yet</p>}
        </>
    )

}

export default CommentList;