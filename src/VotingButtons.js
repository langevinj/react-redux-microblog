import React from 'react' 

function VotingButtons({ count = 0 }) {

    return (
        <div className="voting-buttons">
            <span className="vote-count font-weight-bold mr-2">votes: {count}</span>
            <button className="far fa-thumbs-up btn btn-success mr-3"></button>
            <button className="far fa-thumbs-down btn btn-danger"></button>
        </div>
    )
}
export default VotingButtons;