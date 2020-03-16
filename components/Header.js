import React from 'react'
import Link from '../src/Link'

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        li: {
            listStyle: 'none'
        }
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,        
        [theme.breakpoints.up('sm')]: {
          marginTop: '0em'
        }
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      link: {
        margin: theme.spacing(1, 1.5),
        textTransform: 'none'
      },
    nav: {
      marginLeft: '1%',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    menuButton: {
      display: 'none',      
      [theme.breakpoints.down('xs')]: {
        display: 'inline'
      }
    },
    logo: {
      fontWeight: '600',      
    }
}))

const Header = () => {
    const classes = useStyles();

    return (    
        <>
         <CssBaseline />
         <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
         <Toolbar className={classes.toolbar}> 
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
           <Link href="/" className={classes.logo}>
              Portfolio
           </Link>
          </Typography>
          <nav className={classes.nav}>
            <Link href="/page" variant="button" color="textPrimary" className={classes.link}>
              HTML
            </Link>
            <Link href="/tags" variant="button" color="textPrimary" className={classes.link}>
              CSS
            </Link>
            <Link href="/popular" variant="button" color="textPrimary" className={classes.link}>
              JS
            </Link>
          </nav>              
        </Toolbar>
      </AppBar>
      </>
    )
}

export default Header