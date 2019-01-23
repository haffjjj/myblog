import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import AppBar from '../components/AppBar'
import PostDetailComponent from '../components/PostDetail'

class PostDetail extends React.Component{
  render(){
    const { classes } = this.props
    return (  
      <Grid className={classes.root}>
        <AppBar />
        <div className={classes.postDetailWrapper}>
          <PostDetailComponent />
        </div>
      </Grid>
    )
  }
}

const styles = {  
  root: {
    height : "100vh"
  },
  postDetailWrapper: {
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "15px 10px 15px 10px",
  }
}

export default withStyles(styles)(PostDetail);
