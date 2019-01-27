import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import "./app.css"

const AppRouter = () => (
  <Router>
    <div>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav> */}

      <Route path="/" exact component={Home} />
      <Route path="/page/:page" exact component={Home} />
      <Route path="/post" component={PostDetail} />

    </div>
  </Router>
)

export default AppRouter