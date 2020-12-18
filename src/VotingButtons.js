import React  from 'react' 
import { voteOnPostApi } from './actionCreators'

function VotingButtons({ handleVote = () => {}, id = null}) {
    return (
        <div className="voting-buttons" id={id}>
            <button className="far fa-thumbs-up btn btn-success mr-3" id="up" onClick={handleVote}></button>
            <button className="far fa-thumbs-down btn btn-danger" id="down" onClick={handleVote}></button>
        </div>
    )
}
export default VotingButtons;