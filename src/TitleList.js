import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { fetchPostsFromApi, voteOnPostApi } from './actionCreators'
import VotingButtons from './VotingButtons'

function TitleList(){
    const titles = useSelector(st => st.titles);
    // const votes = useSelector(st => st.titles.votes)
    const [voted, setVoted] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsFromApi());
    }, [dispatch, voted])
    
    const handleVote = (evt) => {
        evt.preventDefault();
        dispatch(voteOnPostApi(evt.target.parentNode.id, evt.target.id));
        setVoted(!voted)
    }

    return (
        <ul>
            {titles ? titles.map(title => <li className="postCard container w-25 border rounded bg-white m-2 d-inline-block p-3" key={uuid()} id={title.id}><Link to={`/posts/${title.id}`}><p>{title.title}</p></Link><p>{title.description}</p><div><span className="vote-count font-weight-bold mr-2">votes: {title.votes ? title.votes : 0 }</span></div><VotingButtons id={title.id} handleVote={handleVote}/></li>) : null}
        </ul>
    )
}

export default TitleList;