import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import poloma_logo from './images/logo_blue_bg.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "2vh"
  },
  menuButton: {
    marginRight: theme.spacing.unit * 2,
  },
  title: {
    flexGrow: 1,
  },
  logo:{
      height: "5vh",
      // verticalAlign: 'middle',
      paddingLeft: "2vw",
      paddingTop: "1.3vh",
      paddingBottom: ".7vh"
  },
  topBar : {
    backgroundColor: '#220a59',
    height: "7vh",
    

  },
  toolbarStyle: {
    height: "7vh",

  }
});

const NavBar = (props) => {
    const {classes} = props

  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.topBar}>
        <div className={classes.toolbarStyle}>
             <img onClick={() => {window.location.reload()}} className={classes.logo} src={poloma_logo}  alt="logo" />
             </div>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar)