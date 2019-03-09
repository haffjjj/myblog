import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'
import FilterLoading from '../components/FilterLoading'
import Line from '../components/Line'
import axios from 'axios'

const perPage = 1

class Home extends React.Component{

  state = {
    posts: {
      data: [],
      count: 0
    },
    filter:{
      tags: []
    },
    pagination: {
      activePage: 1,
      redirect: '/'
    },
    tag: null,
    isLoading: {
      posts: true,
      filter: true
    }
  }

  getTags = async() => {

    await this.setState({
      isLoading: {
        ...this.state.isLoading,
        filter: true
      }
    })

    let tags = await axios({
      method:'get',
      url: `https://api.syafie.id/tags`
    })

    if(tags.status !== 200){
      console.log("Error when get tags")
      tags = this.state.tags
    }

    this.setState({
      filter: {
        tags: tags.data
      },
      isLoading: {
        ...this.state.isLoading,
        filter: false
      }
    })
  }

  getPosts = async () => {

    await this.setState({
      isLoading: {
        ...this.state.isLoading,
        posts: true
      }
    })
        
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

    let postsGroups = await axios({
      method:'get',
      url
    })

    if(postsGroups.status !== 200){
      console.log("Error when get posts")
      postsGroups = this.state.posts
    }

    this.setState({
      posts: postsGroups.data[0] || this.state.posts,
      isLoading: {
        ...this.state.isLoading,
        posts: false
      }
    })
  }

  initState = (props) => {
    const { tag } = props.match.params

    return this.setState({
      pagination: {
        activePage: parseInt(props.match.params.page) || 1,
        redirect: tag !== undefined ? `/tag/${tag}/` : `/`
      },
      tag: tag !== undefined ? tag : null,
    })
  }

  componentWillMount = async ()=> {

    await this.initState(this.props)

    this.getTags()
    this.getPosts()
  }

  componentWillReceiveProps = async (nextProps) => {
    if(nextProps.match.params.page !== this.props.match.params.page || nextProps.match.params.tag !== this.props.match.params.tag){

      await this.initState(nextProps)

      this.getPosts()
    }
  }

  render(){
    const { classes } = this.props
    const { count } = this.state.posts
    return (  
      <Grid className={classes.root} >
        <div className={classes.wrapper}>

          <div className={classes.filterWrapper}>
          {this.state.isLoading.filter === false ? (
            <Filter filter={this.state.filter} />
          ): <FilterLoading />}

          </div>

        <Line />
        <div className={classes.postWrapper}>
        {this.state.isLoading.posts === false ? (
          <div>
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
            <Pagination 
              activePage={this.state.pagination.activePage}
              perPage={perPage}
              totalItemCount={count}
              redirect={this.state.pagination.redirect}
            />
          </div>
        ): <p>Loading ...</p>}
            
          </div>

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
