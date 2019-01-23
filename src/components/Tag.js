import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const Tag = (props) => {
  const {classes} = props
  return (
    <Grid container>
      {['#tutorial','#coding','#curhat'].map((d) => (
        <Grid item>
          <div className={classes.postTag}>
            <p className={classes.postTagTitle}>{d}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

const styles = {
  postTag: {
    backgroundColor: "#dedede",
    marginRight: "5px",
    padding: "2px 10px 2px 10px",
    borderRadius: "50px"
  },
  postTagTitle: {
    fontSize: "13px"
  },
}

export default withStyles(styles)(Tag);
