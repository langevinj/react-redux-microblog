import React from 'react'
import './App.css';
import Header from './Header'
import NewPost from './NewPost'
import Post from './Post'
import { Route, BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Home'
// import { useLocalStorage } from './hooks'
// import { loadLocalStorage } from './actions';
// import { fetchPostsFromApi } from './actionCreators';

function App() {
  // const [blogsLoaded, setBlogsLoaded] = useState(false)
  const posts = useSelector(st => st.posts)
  const error = useSelector(st => st.error);
  // const [storedPosts, setStoredPosts] = useLocalStorage("posts");
  
  //sort out the blog to be deleted and remove from blogs
  //
  //on render grab the posts from local storage
  // useEffect(() => {
  //   dispatch(loadLocalStorage(storedPosts))
  // }, [])

  // useEffect(() => {
  //   function updateLocalPosts() {
  //     setStoredPosts(storedPosts => posts)
  //   }
  //   updateLocalPosts()
  // }, [posts])

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
