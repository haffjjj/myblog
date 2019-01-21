import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// import LinearProgress from '@material-ui/core/LinearProgress'

class Home extends React.Component{
  render(){

    const { classes } = this.props

    return (  
      <Grid className={classes.root}>
        
        {/* appbar */}

        <div className={classes.appBar}>
          <Grid container className={classes.appBarRoot}>
              <Grid container>
                <Grid item md={3}>
                  <Grid item >
                    <h3 className={classes.appBarTitleText}>Syafie.id</h3>
                  </Grid>
                </Grid>

                <Grid item md={9}>
                  <Grid className={classes.appBarMainRoot} container alignItems="center" justify="flex-end">
                    <Grid item>
                      <Button className={classes.appBarMainButton} color="primary">Home</Button>
                      <Button className={classes.appBarMainButton} color="primary">Portofolio</Button>
                      <Button className={classes.appBarMainButton} color="primary">About</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>

        {/* endappbar */}


        {/* <div className={classes.linearProgressRoot}>
          <LinearProgress classes={{
            colorPrimary: classes.linearProgressColorPrimary,
            barColorPrimary: classes.linearProgressBarColorPrimary,
          }}/>
        </div> */}

        {/* post */}

        {[1,2,3,4,5,6].map(() => (
          <div className={classes.post} onClick={()=> alert('onclick post')}>
            <Grid container className={classes.postRoot}>
              <Grid item md={3} className={classes.postThumbnailRoot}>
                <div className={classes.postThumbnail}>

                </div>
              </Grid>
              <Grid item md={9}>
                <div>
                  <h2 className={classes.postTitle}>Work in Progress</h2>
                  <p className={classes.postContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  <p className={classes.postDate}>11 jan 2000  </p>
                </div>
              </Grid>
            </Grid>
        </div>
        ))}

        {/* end post */}

        {/* pagination */}

        <div className={classes.pagination}>
          <Grid container className={classes.paginationRoot} justify="center">
            <Grid item >
              <Grid container className={classes.paginationNumber} justify="center" alignItems="center">
                <Grid item>
                  <span className={classes.paginationNumberText}>1</span>
                </Grid>
              </Grid>
            </Grid>

            <Grid item >
              <Grid container className={classes.paginationNumber} justify="center" alignItems="center">
                <Grid item>
                  <span className={classes.paginationNumberText}>2</span>
                </Grid>
              </Grid>
            </Grid>

            <Grid item >
              <Grid container className={classes.paginationNumber} justify="center" alignItems="center">
                <Grid item>
                  <span className={classes.paginationNumberText}>3</span>
                </Grid>
              </Grid>
            </Grid>
  
          </Grid>
        </div>

        {/* end pagination */}


      </Grid>
    )
  }
}

const styles = {
  root: {
    height : "100vh"
  },
  // appbar
  appBar: {
    backgroundColor: "#1b1b1b",
  },
  appBarRoot: {
    flexGrow: 1,
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "15px 10px 15px 10px"
  },
  appBarTitleText: {
    color: "white",
    fontSize: "25px"
  },
  appBarMainRoot: {
    flexGrow: 1
  },
  appBarMainButton: {
    color: "white"
  },
  // end appbar
  linearProgressRoot: {
    flexGrow: 1,
  },
  linearProgressColorPrimary: {
    backgroundColor: "white"
  },
  linearProgressBarColorPrimary: {
    backgroundColor: "#545454"
  },
  // post
  post: {
    margin: "20px 0px 20px 0px",
    cursor: "pointer" 
  },
  postRoot: {
    flexGrow: 1,
    backgroundColor: "#FAFAFA",
    borderRadius: "5px",
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "15px 10px 15px 10px"
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
  pagination: {
    
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
  // end post
}

export default withStyles(styles)(Home);
