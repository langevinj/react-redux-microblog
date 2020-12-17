import React, { useState } from 'react'

function CommentForm({ addComment = () => {} }){
    const [newComment, setNewComment] = useState("");

    const handleChange = (evt) => {
        //check this over
        setNewComment(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addComment(newComment);
        setNewComment("");
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