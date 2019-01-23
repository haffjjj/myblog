import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Dot = (props) => {
  const {classes} = props
  return (
    <div className={classes.dot} />
  )
}

const styles = { 
  dot: {
    height: "2px",
    width: "2px",
    borderRadius: "50px",
    backgroundColor: "black",
    margin: "0px 5px 0px 5px"
  }
}

export default withStyles(styles)(Dot)
