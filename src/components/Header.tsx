import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: '0 64px'
    },
    title: {
      flexGrow: 1,
    },
    bg : {
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        height: '65px'
    }
  }),
);

interface Props {
    
}

const Header = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" classes={{root: classes.bg}}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Medium
                </Typography>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;