import './App.css';
import Header from './Header'
import { Route } from 'react-router-dom'
import Blog from './Blog'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Blog />
      </Route>
    </div>
  );
}

export default App;
