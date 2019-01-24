import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Line = (props) => {
  const {classes} = props
  return (
    <div className={classes.line} />
  )
}

const styles = { 
  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "#dedede"
  }
}

export default withStyles(styles)(Line)
