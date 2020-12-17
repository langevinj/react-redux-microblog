import React from 'react'
import './App.css';
import Header from './Header'
import NewPost from './NewPost'
import Post from './Post'
import { Route, BrowserRouter } from 'react-router-dom'
import Blog from './Blog'
import BlogContext from './BlogContext'
import useLocalStorage from './hooks'

function App() {
  // const [blogsLoaded, setBlogsLoaded] = useState(false)
  const [blogs, setBlogs] = useLocalStorage("blogs");
  //sort out the blog to be deleted and remove from blogs

  console.log(blogs)
  return (
    <BrowserRouter>
      <BlogContext.Provider value={{ blogs, setBlogs }}>
        <div className="App container-fluid text-left ml-3">
          <Header />
          <Route exact path="/posts/:id">
            <Post />
          </Route>
          <Route exact path="/new">
            <NewPost />
          </Route>
          <Route exact path="/">
            <Blog />
          </Route>
        </div>
      </BlogContext.Provider>
    </BrowserRouter>
  );
}

export default App;
