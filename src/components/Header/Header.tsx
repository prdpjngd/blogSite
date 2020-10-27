import React, {useContext} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"
import Img from "gatsby-image";
import logo from "../../assets/img/logo.svg";
import Modal from "../Modal/Modal";
import {ActionContext} from "../../context/GlobalState";
import {auth} from "../../services/firebase";

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
    const {dispatch, loginModal, authenticated, user} = useContext(ActionContext);
    const classes = useStyles();

    const handleClose = () => {
      dispatch({
        type: "CLOSE_MODAL"
      })
    }

    const handleOpen = () => {
      dispatch({
        type: "OPEN_MODAL"
      })
    }

    const logout = () => {
      auth().signOut().then(function() {
        dispatch({
          type: "LOGOUT"
        })
      }).catch(function(error) {
        console.log(error)
      });
    }

    return (
      <>
        <div className={classes.root}>
              <AppBar position="static" classes={{root: classes.bg}}>
                  <Toolbar classes={{root : classes.tool}}>
                    <Typography variant="h4" className={classes.title}>
                      <Link to="/">
                        <img src={logo} alt='logo' className="logo"/>
                      </Link>
                    </Typography>
                    {
                    !authenticated ?
                    <div className={classes.buttonArea}>
                      <Button color="inherit" classes={{root: classes.buttontext}}>Our Story</Button>
                      <Button color="inherit" classes={{root: classes.buttontext}}>Membership</Button>
                      <Button color="inherit" classes={{root: classes.buttontext}}>Write</Button>
                        <button className="roundBorderedButton" onClick={handleOpen}>
                          Get Started
                        </button>
                    </div>
                    :
                    <div className={classes.buttonArea}>
                      <Button color="inherit" onClick={logout} classes={{root: classes.buttontext}}>Logout</Button>
                      <div className="picture__round">
                        <div className="picture__round_circle">
                          <button className="button__circle_user">
                            <img src={user.photoURL} alt={user.displayName} className="image__user"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    }
                  </Toolbar>
              </AppBar>
          </div>
          {loginModal && <Modal handleClose={handleClose}/>}
      </>
    )
}

export default Header;