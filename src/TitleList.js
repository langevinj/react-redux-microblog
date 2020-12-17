import React, {useEffect} from 'react' 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocalStorage } from './hooks'

function TitleList(){
    const posts = useSelector(st => st.posts);
    // const [storedPosts, setStoredPosts] = useLocalStorage("posts")

    // useEffect(() => {
    //     function updateLocalPosts(){
    //         setStoredPosts(storedPosts => posts)
    //     }
    // }, [posts])

    return (
        <ul>
            {posts ? Object.entries(posts).map(([id, post]) => <li className="postCard container w-25 border rounded bg-light m-2 d-inline-block p-3"><Link to={`/posts/${id}`}><p>{post.title}</p></Link><p>{post.description}</p></li>) : null}
        </ul>
    )
}

export default TitleList;