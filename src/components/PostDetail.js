import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Dot from './Dot'
import Tag from './Tag'

const PostDetail = (props) => {
  const {classes} = props
    return (
      <Grid container className={classes.postDetailRoot}>
        <Grid item md={12} className={classes.postDetailTitleImageRoot}>
          <div className={classes.postDetailTitleImage} style={ { backgroundImage: 'url("https://i.pinimg.com/originals/8f/d3/c4/8fd3c464bf35e59e6294ab3837c22ba7.jpg")' } }>

          </div>
        </Grid>
        <Grid item md={12}>
          <div>
            <h2 className={classes.postDetailTitle}>Hello, iam web developer</h2>
            <Tag />
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
            <p className={classes.postDetailContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
        </Grid>
      </Grid>
    )
} 

const styles = {
  postDetailRoot: {
    flexGrow: 1,
    borderRadius: "5px",
  },
  postDetailTitleImageRoot: {
    marginBottom: "20px"
  },
  postDetailTitleImage: {
    width: "100%",
    height: "450px",
    backgroundColor: "#545454",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "2px"
  },
  postDetailTitle: {
    fontSize: "30px",
    marginBottom: "5px"
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
  postDetailContent: {
    marginTop: "20px",
    color: "#484848"
  },
  postDetailDate: {
    marginTop: "5px",
    fontSize: "13px"
  }
}

export default withStyles(styles)(PostDetail)