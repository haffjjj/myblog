import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import AppBar from '../components/AppBar'
import Post from '../components/Post'
import Pagination from '../components/Pagination'

class Home extends React.Component{
  render(){

    const { classes } = this.props

    return (  
      <Grid className={classes.root}>
        <AppBar />
        <div className={classes.postWrapper}>
          <Post />
        </div>
        <div className={classes.paginationWrapper}>
          <Pagination />
        </div>
      </Grid>
    )
  }
}

const styles = {
  root: {
    height : "100vh"
  },
  postWrapper: {
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "15px 10px 15px 10px",
  },
  paginationWrapper: {
    maxWidth: "960px", 
    margin: "0 auto",
  }
}

export default withStyles(styles)(Home);
