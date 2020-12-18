import React, { useEffect } from 'react' 
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { fetchPostsFromApi} from './actionCreators'

function TitleList(){
    const titles = useSelector(st => st.titles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsFromApi());
    }, [dispatch])

    return (
        <ul>
            {titles ? titles.map(title => <li className="postCard container w-25 border rounded bg-light m-2 d-inline-block p-3" key={uuid()}><Link to={`/posts/${title.id}`}><p>{title.title}</p></Link><p>{title.description}</p></li>) : null}
        </ul>
    )
}

export default TitleList;