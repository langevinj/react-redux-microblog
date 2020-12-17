import React, { useContext } from 'react'
import BlogContext from './BlogContext'
import TitleList from './TitleList'

function Blog() {
    const { blogs } = useContext(BlogContext)

    return (
        <div>
            <p>Welcome to <span className="font-weight-bold">Microblog,</span> our innovative site for communicating on the information superhighway.</p>
            <TitleList blogs={blogs}/>
        </div>
    )
}

export default Blog;