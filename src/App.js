import React from 'react'
import './App.css';
import Header from './Header'
import NewPost from './NewPost'
import Post from './Post'
import { Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './Home'

function App() {

  const posts = useSelector(st => st.posts)
  const error = useSelector(st => st.error);

  if (error) {
    return <h3>Something is wrong...</h3>
  }

  return (
    <BrowserRouter>
        <div className="App container-fluid text-left ml-3">
          <Header />
          <Route exact path="/posts/:id">
            <Post />
          </Route>
          <Route exact path="/new">
            <NewPost />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
