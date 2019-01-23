import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class AppBar extends React.Component{
  render(){
    const {classes} = this.props
    return (
      <div className={classes.appBar}>
        <Grid container className={classes.appBarRoot}>
            <Grid container>
              <Grid item md={3}>
                <Grid item >
                  <h3 className={classes.appBarTitleText}>Syafie.id</h3>
                </Grid>
              </Grid>

              <Grid item md={9}>
                <Grid className={classes.appBarMainRoot} container alignItems="center" justify="flex-end">
                  <Grid item>
                    <Button className={classes.appBarMainButton} color="primary">Home</Button>
                    <Button className={classes.appBarMainButton} color="primary">Portofolio</Button>
                    <Button className={classes.appBarMainButton} color="primary">About</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  appBar: {
    backgroundColor: "#1b1b1b",
  },
  appBarRoot: {
    flexGrow: 1,
    maxWidth: "960px", 
    margin: "0 auto",
    padding: "15px 10px 15px 10px"
  },
  appBarTitleText: {
    color: "white",
    fontSize: "25px"
  },
  appBarMainRoot: {
    flexGrow: 1
  },
  appBarMainButton: {
    color: "white"
  },
  linearProgressRoot: {
    flexGrow: 1,
  },
  linearProgressColorPrimary: {
    backgroundColor: "white"
  },
  linearProgressBarColorPrimary: {
    backgroundColor: "#545454"
  }
}

export default withStyles(styles)(AppBar);