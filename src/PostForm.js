import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'

function PostForm({ addNewPost }) {
    const INITIAL_STATE = { title: "", description: "", body: "", comments: [] }
    const [formData, setFormData] = useState(INITIAL_STATE);
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
        addNewPost({...formData, id: uuid()});
        //if editting a pre-existing blog need to make sure that it is saved over it's previous self
        // if (!post.id) {
        //     { !blogs ? setBlogs([{ ...formData, id: uuid() }]) : setBlogs([...blogs, { ...formData, id: uuid() }]) }
        // } else {
        //     setBlogs(blogs.map(blog => blog.id === post.id ? { ...formData, id: blog.id } : blog))
        // }

        // setBlogs([...blogs, {...formData, id: (blogs.length + 1)}])
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