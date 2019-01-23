import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

class Post extends React.Component{
  render(){
    const { classes } = this.props
    return (  
      <Grid container className={classes.postRoot} onClick={()=> alert('onclick post')}>
        <Grid item md={3} className={classes.postThumbnailRoot}>
          <div className={classes.postThumbnail}>

          </div>
        </Grid>
        <Grid item md={9}>
          <div>
            <h2 className={classes.postTitle}>Hello, iam web developer</h2>
            <p className={classes.postContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <p className={classes.postDate}>11 jan 2000  </p>
          </div>
        </Grid>
      </Grid>
    )
  }
}

const styles = {
  postRoot: {
    flexGrow: 1,
    borderRadius: "5px",
    cursor: "pointer" 
  },
  postThumbnailRoot: {
    paddingRight: "10px",
  },
  postThumbnail: {
    width: "100%",
    height: "150px",
    backgroundColor: "#545454",
    borderRadius: "2px"
  },
  postTitle: {
    fontSize: "30px"
  },
  postContent: {
    marginTop: "10px",
    color: "#484848"
  },
  postDate: {
    marginTop: "10px",
    fontSize: "13px"
  },
  paginationRoot: {
    maxWidth: "960px", 
    margin: "0 auto",
    flexGrow: 1,
  },
  paginationNumber: {
    height: "35px",
    width: "35px",
    backgroundColor: "#545454",
    borderRadius: "5px",
    margin: "2px",
    cursor: "pointer"
  },
  paginationNumberText: {
    color: "white"
  }
}

export default withStyles(styles)(Post);
