import React from 'react'
import TitleList from './TitleList'

function Home() {

    return (
        <div>
            <p>Welcome to <span className="font-weight-bold">Microblog,</span> our innovative site for communicating on the information superhighway.</p>
            <TitleList />
        </div>
    )
}

export default Home;