import './App.css';
import Header from './Header'
import NewPost from './NewPost'
import Post from './Post'
import { Route, BrowserRouter } from 'react-router-dom'
import Blog from './Blog'
import BlogContext from './BlogContext'

function App() {
  return (
    <BrowserRouter>
      <BlogContext.Provider value={{ blogs, setBlogs }}>
        <div className="App">
          <Header />
          <Route exact path="/new">
            <NewPost />
          </Route>
          <Route exact path="/:postid">
            <Post />
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
