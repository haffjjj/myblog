import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const Filter = (props) => {
  const {classes} = props
  return (
    <Grid container justify="center" alignItems="center" style={{overflow: "auto", whiteSpace: 'nowrap'}}>
      {/* <Grid>
        <p className={classes.postTagFilterTitle}>Filter : </p>
      </Grid> */}
      {['#tutorial','#coding', 'javascript'].map((d) => (
        <Grid>
          <div className={classes.postTag}>
            <p className={classes.postTagTitle}>{d}</p>
          </div>
        </Grid>
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
}

export default withStyles(styles)(Filter)
