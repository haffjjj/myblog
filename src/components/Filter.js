import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const Filter = (props) => {
  const {classes} = props
  return (
    <Grid container justify="center" alignItems="center" style={{overflow: "auto", whiteSpace: 'nowrap'}}>
      {props.filter.tags.map((d) => (
        <Link to={`/tag/${d.tag}`} className={classes.link}>
          <Grid>
            <div className={classes.postTag}>
              <p className={classes.postTagTitle}>#{d.tag}</p>
            </div>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}

const styles = { 
  postTagFilterTitle: {
    marginRight: "10px"
  },
  postTag: {
    backgroundColor: "#6749c1",
    boxShadow: "0 0px 10px #6749c1",
    marginRight: "5px", 
    padding: "2px 10px 2px 10px",
    borderRadius: "50px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#2f1b6b",
    },
    marginBottom: "10px"
  },
  postTagTitle: {
    fontSize: "18px",
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "#1b1b1b",
    marginTop: "30px"
  }
}

export default withStyles(styles)(Filter)
