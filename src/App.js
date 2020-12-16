import './App.css';
import Header from './Header'
import NewPost from './NewPost'
import Post from './Post'
import { Route } from 'react-router-dom'
import Blog from './Blog'

function App() {
  return (
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
  );
}

export default App;
