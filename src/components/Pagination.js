import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const Pagination = (props) => {
  const { classes } = props
    return (  
      <Grid container className={classes.paginationRoot} justify="center" alignItems="center">
        {[1,2,3,4,5].map((i, d) => (
          <Grid item >
            <Grid container className={classes.paginationNumber} justify="center" alignItems="center">
              <Grid item>
                <span className={classes.paginationNumberText}>{d + 1}</span>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item>
          <Grid container>
            <Grid item><div className={classes.dot}/></Grid>
            <Grid item><div className={classes.dot}/></Grid>
            <Grid item><div className={classes.dot}/></Grid>
          </Grid>
        </Grid>
        <Grid item >
            <Grid container className={classes.paginationNumber} justify="center" alignItems="center">
              <Grid item>
                <span className={classes.paginationNumberText}>99</span>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    )
}

const styles = {
  paginationRoot: {
    flexGrow: 1
  },
  dot: {
    height: "2px",
    width: "2px",
    backgroundColor: "black",
    borderRadius: "50px",
    margin: "2px"
  },
  paginationNumber: {
    height: "35px",
    width: "35px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    margin: "2px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d4d4d4",
    }
  },
  paginationNumberText: {
    // color: "white"
  }
}

export default withStyles(styles)(Pagination);
