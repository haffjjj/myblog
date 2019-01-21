import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
// import Testing from './components/Testing'

import "./app.css"

const About = () => <h2>About</h2>

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
      {/* <Route path="/" exact component={Testing} /> */}
      <Route path="/about/" component={About} />

    </div>
  </Router>
)

export default AppRouter