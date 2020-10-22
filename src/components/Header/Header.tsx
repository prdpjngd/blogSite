import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import logo from "../../assets/img/logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    bg : {
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        height: '75px',
        borderBottom: 'solid 1px rgba(41, 41, 41, 1)'
    },
    tool: {
      margin: '10px 48px',
      [theme.breakpoints.down('xs')]: {
        margin: '10px'
      },
    },
    buttonArea : {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '90%'
      },
    },
    buttontext : {
      fontSize: '14px',
      marginRight: '10px',
      textTransform: 'initial',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    }
  })
);

interface Props {
    
}

const Header = (props: Props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" classes={{root: classes.bg}}>
                <Toolbar classes={{root : classes.tool}}>
                <Typography variant="h4" className={classes.title}>
                  <img src={logo} alt='logo' className="logo"/>
                </Typography>
                <div className={classes.buttonArea}>
                <Button color="inherit" classes={{root: classes.buttontext}}>Our Story</Button>
                <Button color="inherit" classes={{root: classes.buttontext}}>Membership</Button>
                <Button color="inherit" classes={{root: classes.buttontext}}>Write</Button>
                  <button className="roundBorderedButton">
                    Get Started
                  </button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;