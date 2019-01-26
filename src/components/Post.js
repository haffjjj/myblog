import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Dot from './Dot'
import Tag from './Tag'


class Post extends React.Component{

  state = {
    window: {
      height: 0,
      width: 0
    }
  }

  componentDidMount = () => {
    this.handleResize()
  }

  handleResize = () => {
    this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    })
  }

  render(){
    const { classes } = this.props
    return (  
      <Grid container className={classes.postRoot}>
        <Grid item md={3} className={classes.postThumbnailRoot}>
          <Link to={this.props.redirect}>
            <div className={classes.postThumbnailWrapper}>
              <img className={classes.postThumbnail} src="https://i.pinimg.com/originals/8f/d3/c4/8fd3c464bf35e59e6294ab3837c22ba7.jpg" alt="post"/>
            </div>
          </Link>
        </Grid>
        <Grid item md={9} className={classes.postMain}>
          <div>
            <Link className={classes.postTitleLink} to={this.props.redirect}>
              <h2 className={classes.postTitle}>Hello Lorem</h2>
            </Link>
            <Tag />
            <p className={classes.postContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <Grid container className={classes.postInfo} alignItems="center">
                <Grid item>
                  <p className={classes.postDate}>11 jan 2000  </p>
                </Grid>
                <Grid item>
                  <Dot />
                </Grid>
                <Grid item>
                  <p className={classes.postReadTime}>5 min</p>
                </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  postRoot: {
    flexGrow: 1,
    borderRadius: "5px",
  },
  postThumbnailRoot: {
    // paddingRight: "10px",
  },
  postMain: {
    padding: "0px 10px 0px 10px",
    [theme.breakpoints.down('sm')]: {
      padding: "0px"
    }
  },
  postThumbnailWrapper: {
    width: "240px", 
    height: "148px", 
    overflow: "hidden",
    [theme.breakpoints.down('sm')]: {
      width: "100%", 
      height: "100%"
    }
  },
  postThumbnail: {
    width: "240px",
    borderRadius: "2px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "10px",
      width: "100%",
    }
  },
  postTitleLink: {
    textDecoration: "none",
    color: "#1b1b1b"
  },
  postTitle: {
    fontSize: "25px",
    marginBottom: "5px",
  },
  postContent: {
    marginTop: "10px",
    color: "#484848"
  },
  postInfo: {
    marginTop: "10px",
  },
  postDate: {
    fontSize: "13px",
    color: "#484848"
  },
  postReadTime: {
    fontSize: "13px",
    color: "#484848"
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
})

export default withStyles(styles)(Post);
