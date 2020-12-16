import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import BlogContext from './BlogContext'

function NewPost() {
    const INITIAL_STATE = { title: "", description: "", body: "" }
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const { blogs, setBlogs } = useContext(BlogContext)

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //need to save in here
        {!blogs ? setBlogs([{ ...formData, id: 1 }]) : setBlogs([...blogs, { ...formData, id: (blogs.length + 1) }])}
        // setBlogs([...blogs, {...formData, id: (blogs.length + 1)}])
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