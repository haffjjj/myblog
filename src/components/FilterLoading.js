import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const Filter = (props) => {
  const {classes} = props
  return (
    <Grid container justify="center">
      {[1,2,3].map(()=> <div className={classes.wrapper}/>)}
    </Grid> 
  )
}

const styles = { 
  wrapper: {
    marginBottom: "10px",
    marginTop: "10px",
    margin: "3px",
    borderRadius: "50px",
    width: "100px",
    height: "26px",
    animation: "animation-16jpnkj 1.2s ease-in-out 0s infinite normal none running",
    backgroundColor: "rgb(238, 238, 238)",
    backgroundImage: "linear-gradient(90deg, rgb(238, 238, 238), rgb(245, 245, 245), rgb(238, 238, 238))",
    backgroundSize: "200px 100%",
    backgroundRepeat: "no-repeat"
  }
}

export default withStyles(styles)(Filter)
