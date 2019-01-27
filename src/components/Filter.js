import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const Filter = (props) => {
  const {classes} = props
  return (
    <Grid container justify="center" alignItems="center" style={{overflow: "auto", whiteSpace: 'nowrap'}}>
      {/* <Grid>
        <p className={classes.postTagFilterTitle}>Filter : </p>
      </Grid> */}
      {['tutorial','coding', 'javascript'].map((d) => (
        <Link to={`/tag/${d}`} className={classes.link}>
          <Grid key={d}>
            <div key={d} className={classes.postTag}>
              <p className={classes.postTagTitle}>#{d}</p>
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
    backgroundColor: "#f4f4f4",
    marginRight: "5px",
    padding: "2px 10px 2px 10px",
    borderRadius: "50px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d4d4d4",
    },
    marginBottom: "10px"
  },
  postTagTitle: {
    fontSize: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#1b1b1b"
  }
}

export default withStyles(styles)(Filter)
