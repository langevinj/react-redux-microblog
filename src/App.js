import React from 'react'
import './App.css';
import Header from './Header'
import NewPost from './NewPost'
import Post from './Post'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import useLocalStorage from './hooks'

function App() {
  // const [blogsLoaded, setBlogsLoaded] = useState(false)
  const [blogs, setBlogs] = useLocalStorage("blogs");
  //sort out the blog to be deleted and remove from blogs
  //
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
