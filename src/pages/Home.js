import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'
import Line from '../components/Line'
import axios from 'axios'

const perPage = 3

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

  getPosts = async () => {
    const activePage = this.state.pagination.activePage
    
    const start = activePage > 1 ? perPage * ( activePage - 1) : 0
    const limit = perPage

    const tag = this.state.tag

    let url

    if(tag){
      url = `https://api.syafie.id/postsGroups/tag/${tag}?start=${start}&limit=${limit}`
    }else{
      url = `https://api.syafie.id/postsGroups?start=${start}&limit=${limit}`
    }

    const postsGroups = await axios({
      method:'get',
      url
    })

    if(postsGroups.status !== 200){
      alert("erros")
    }

    this.setState({
      posts: postsGroups.data[0] || this.state.posts,
      isLoading: false
    })
  }

  componentWillMount = async ()=> {
    const { tag } = this.props.match.params

    await this.setState({
      pagination: {
        activePage: parseInt(this.props.match.params.page) || 1,
        redirect: tag !== undefined ? `/tag/${tag}/` : `/`
      },
      tag: tag !== undefined ? tag : null,
      isLoading: true
    })

    this.getPosts()
  }

  componentWillReceiveProps = async (nextProps) => {
    if(nextProps.match.params.page !== this.props.match.params.page || nextProps.match.params.tag !== this.props.match.params.tag){

      const { tag, page } = nextProps.match.params

      await this.setState({
        posts: {
          data: [],
          count: 0
        },
        pagination: {
          activePage: parseInt(page) || 1,
          redirect: tag !== undefined ? `/tag/${tag}/` : `/`
        },
        tag: tag !== undefined ? tag : null,
        isLoading: true
      })

      this.getPosts()
    }
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
              perPage={perPage}
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
    padding: "15px 10px 15px 10px"
  },
  filterWrapper: {
    marginBottom: "20px"
  },
  postWrapper: {
    paddingTop: "20px",
  },
  post: {
    marginBottom: "40px"
  }
}

export default withStyles(styles)(Home);
