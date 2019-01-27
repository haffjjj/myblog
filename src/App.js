import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import "./app.css"
import AppBar from './components/AppBar'

import { createBrowserHistory } from 'history'

const AppRouter = () => (
  <Router history={createBrowserHistory}>
    <div>
      <AppBar
        menu={[
          {
            title: "home",
            redirect: "/"
          }
        ]}
        title={{
          title: "SYAFIE.ID",
          redirect: "/"
        }}
      />

      <Route path="/" exact component={Home} />
      <Route path="/page/:page" exact component={Home} />
      <Route path="/tag/:tag" exact component={Home} />
      <Route path="/tag/:tag/page/:page" exact component={Home} />
      <Route path="/post" component={PostDetail} />

    </div>
  </Router>
)

export default AppRouter