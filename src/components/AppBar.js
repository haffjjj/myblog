import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const AppBar = (props) => {
  const {classes} = props
    return (  
      <div className={classes.appBar}>
        <Grid container className={classes.appBarRoot}>
            <Grid container>
              <Grid item md={3} sm={12} xs={12}>
                <Grid item >
                  <h3 className={classes.appBarTitleText}>Syafie.id</h3>
                </Grid>
              </Grid>

              <Grid item md={9} sm={12} xs={12}>
                <Grid className={classes.appBarMainRoot} container alignItems="center" justify="flex-end">
                  <Grid item className={classes.appBarMainWrapper}>
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

const styles = theme => ({
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
    fontSize: "25px",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    }
  },
  appBarMainRoot: {
    flexGrow: 1,
    margin: "auto"
   
  },
  appBarMainWrapper: {
     [theme.breakpoints.down('sm')]: {
      margin: "10px auto 0px auto"
    }
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
})

export default withStyles(styles)(AppBar);