import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routes, Router, Route, Link } from "react-router"
import Posts from './Routes/Posts';
import About from './Routes/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
