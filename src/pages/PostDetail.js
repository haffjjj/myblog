import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import AppBar from '../components/AppBar'
import PostDetailComponent from '../components/PostDetail'

import postDetail from '../postDetail'

class PostDetail extends React.Component{

  state = {
    postDetail: {
      title: '',
      image: '',
      tag: [],
      createdAt: '',
      readingTime: '',
      content: ''
    }
  }

  componentDidMount = async ()=> {
    this.setState({
      postDetail
    })
  }
  
  render(){
    const { classes } = this.props
    const { postDetail } = this.state
    console.log(this.state)
    return (  
      <Grid className={classes.root}>
        <AppBar />
        <div className={classes.postDetailWrapper}>
          <PostDetailComponent
            title={postDetail.title}
            image={postDetail.image}
            tag={postDetail.tag}
            createdAt={postDetail.createdAt}
            readingTime={postDetail.readingTime}
            content={postDetail.content}
          />
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
