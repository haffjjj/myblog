import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const Pagination = (props) => {
  const { classes } = props
    return (  
      <Grid container className={classes.paginationRoot} justify="center">
        {[1,2,3,4,5].map((i, d) => (
            <Grid item >
            <Grid container className={classes.paginationNumber} justify="center" alignItems="center">
              <Grid item>
                <span className={classes.paginationNumberText}>{d + 1}</span>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    )
}

const styles = {
  paginationRoot: {
    flexGrow: 1,
  },
  paginationNumber: {
    height: "35px",
    width: "35px",
    backgroundColor: "#545454",
    borderRadius: "5px",
    margin: "2px",
    cursor: "pointer"
  },
  paginationNumberText: {
    color: "white"
  }
}

export default withStyles(styles)(Pagination);
