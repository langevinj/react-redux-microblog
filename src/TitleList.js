import React, {useEffect} from 'react' 
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsFromApi } from './actionCreators';

function TitleList(){
    const posts = useSelector(st => st.posts);
    const error = useSelector(st => st.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsFromApi());
    }, [dispatch])

    if(error) {
        return <h3>Something is wrong...</h3>
    }


    return (
        <ul>
            {posts ? Object.entries(posts).map(([id, post]) => <li className="postCard container w-25 border rounded bg-light m-2 d-inline-block p-3"><Link to={`/posts/${id}`}><p>{post.title}</p></Link><p>{post.description}</p></li>) : null}
        </ul>
    )
}

export default TitleList;