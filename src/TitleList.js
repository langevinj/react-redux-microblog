import React from 'react' 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {v4 as uuid} from 'uuid'

function TitleList(){
    const titles = useSelector(st => st.titles);

    return (
        <ul>
            {titles ? titles.map(title => <li className="postCard container w-25 border rounded bg-light m-2 d-inline-block p-3" key={uuid()}><Link to={`/posts/${title.id}`}><p>{title.title}</p></Link><p>{title.description}</p></li>) : null}
        </ul>
    )
}

export default TitleList;