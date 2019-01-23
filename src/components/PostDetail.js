import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

class PostDetail extends React.Component{
  render() {
    const {classes} = this.props
    return (
      <div className={classes.postDetail}>
        <Grid container className={classes.postDetailRoot}>
          <Grid item md={12} className={classes.postDetailTitleImageRoot}>
            <div className={classes.postDetailTitleImage} style={ { backgroundImage: 'url("https://i.pinimg.com/originals/8f/d3/c4/8fd3c464bf35e59e6294ab3837c22ba7.jpg")' } }>

            </div>
          </Grid>
          <Grid item md={12}>
            <div>
              <h2 className={classes.postDetailTitle}>Hello, iam web developer</h2>
              <p className={classes.postDetailDate}>11 jan 2000  </p>
              <p className={classes.postDetailContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  postDetail: {
    margin: "20px 0px 20px 0px",
  },
  postDetailRoot: {
    flexGrow: 1,
    borderRadius: "5px",
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "15px 10px 15px 10px",
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
    borderRadius: "2px"
  },
  postDetailTitle: {
    fontSize: "30px"
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

export default withStyles(styles)(PostDetail);