import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'

function PostForm({ addNewPost = () => {}, post = null, editBlog = () => {} }) {
    const INITIAL_STATE = { title: "", description: "", body: "", comments: [] }
    const [formData, setFormData] = useState(post ? post : INITIAL_STATE);
    const history = useHistory();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        post ? editBlog(formData) : addNewPost({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    }

    const handleCancel = (evt) => {
        evt.preventDefault();
        setFormData(INITIAL_STATE);
        history.push("/");
    }

    return (
        <form className="text-left" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input className="form-control" name="title" id="title" value={formData.title} onChange={handleChange} type="text"></input>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input className="form-control" name="description" id="description" value={formData.description} onChange={handleChange} type="text"></input>
            </div>
            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea className="form-control" name="body" id="body" value={formData.body} onChange={handleChange} rows="8" cols="50"></textarea>
            </div>
            <button className="btn btn-primary rounded mr-2">Save</button>
            <button className="btn btn-secondary rounded" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default PostForm;