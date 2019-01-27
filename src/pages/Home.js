import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'
import Line from '../components/Line'

import posts from '../posts'

class Home extends React.Component{

  state = {
    posts: {
      data: [],
      count: 0
    },
    pagination: {
      activePage: 1,
      redirect: '/'
    },
    tag: null,
    isLoading: true
  }

  getPosts = () => {
    this.setState({
      posts,
      isLoading: false
    })
  }

  componentWillMount = async ()=> {
    const { tag } = this.props.match.params

    this.getPosts()
    
    this.setState({
      pagination: {
        activePage: parseInt(this.props.match.params.page) || 1,
        redirect: tag !== undefined ? `/tag/${tag}/` : `/`
      },
      tag: tag !== undefined ? tag : null
    })
  }

  render(){
    const { classes } = this.props
    const { count } = this.state.posts
    return (  
      <Grid className={classes.root} >
        {this.state.isLoading === false ? (
            <div className={classes.wrapper}>
            <div className={classes.filterWrapper}><Filter /></div>
            <Line />
            <div className={classes.postWrapper}>
              {this.state.posts.data.map((d) => (
              <div key={d} className={classes.post}>
                <Post 
                  redirect="/post"
                  title={d.title}  
                  thumbnail={d.thumbnail}
                  tag={d.tag}
                  createdAt={d.createdAt}
                  readingTime={d.readingTime}
                  content={d.content}
                />
              </div>
              ))}
            </div>
            <Pagination 
              activePage={this.state.pagination.activePage}
              perPage={5}
              totalItemCount={count}
              redirect={this.state.pagination.redirect}
            />
          </div>
        ): <p>Loading ... </p>}
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
