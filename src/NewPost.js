import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewPost() {
    const INITIAL_STATE = { title: "", description: "", body: "" }
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('clicked')
        //need to save in here
        setFormData(INITIAL_STATE);
        history.push("/");
    }

    const handleCancel = (evt) => {
        evt.preventDefault();
        setFormData(INITIAL_STATE);
        history.push("/");
    }

    return (
        <div className="container w-50">
            <h2>New Post</h2>
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
        </div>
    )
}

export default NewPost;