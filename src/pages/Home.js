import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '../components/AppBar'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'
import Line from '../components/Line'
// import Pagination from "react-js-pagination"

import posts from '../posts'

class Home extends React.Component{

  state = {
    posts: {
      data: [],
      count: 0
    }
  }

  componentDidMount = async ()=> {
    this.setState({
      posts
    })
  }

  render(){
    const { classes } = this.props
    return (  
      <Grid className={classes.root}>
        <AppBar />
        <div className={classes.wrapper}>
          <div className={classes.filterWrapper}><Filter /></div>
          <Line />
          <div className={classes.postWrapper}>
            {this.state.posts.data.map((data) => (
            <div className={classes.post}>
              <Post 
                redirect="/post"
                title={data.title}
                thumbnail={data.thumbnail}
                tag={data.tag}
                createdAt={data.createdAt}
                readingTime={data.readingTime}
                content={data.content}
              />
            </div>
            ))}
          </div>
          <Pagination count={this.state.posts.count} />
          {/* <Pagination
            // activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            // onChange={}
          /> */}
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
