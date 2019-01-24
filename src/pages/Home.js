import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '../components/AppBar'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'
import Line from '../components/Line'

class Home extends React.Component{
  render(){
    const { classes } = this.props
    return (  
      <Grid className={classes.root}>
        <AppBar />
        <div className={classes.wrapper}>
          <div className={classes.filterWrapper}><Filter /></div>
          <Line />
          <div className={classes.postWrapper}>
            {[1,2,3,4,5].map(() => (
            <div className={classes.post}>
              <Post redirect="/post"/>
            </div>
            ))}
          </div>
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
  wrapper: {
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "40px 10px 15px 10px",
  },
  filterWrapper: {
    marginBottom: "20px"
  },
  postWrapper: {
    paddingTop: "20px"
  },
  post: {
    marginBottom: "40px"
  }
}

export default withStyles(styles)(Home);
