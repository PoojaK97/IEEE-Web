import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import TemporaryDrawer from '../components/home';
import SimpleBottomNavigation from '../components/bottom';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('xs')]:{
      overFlow:'scroll'
    }
  },

  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#fff',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]:{
      display:'none',
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop:'70px'
  },
  bottom:{
    width:'100%',
    position:'fixed',
    bottom:0,
  }
});

class ResponsiveDrawer extends React.Component {
  constructor(props){
    super(props);
    this.cl=this.cl.bind(this)
  }
  state = {
    mobileOpen: false,
    open:false
  };
  sub=()=>{
    return (this.props.notification?('subscribed'):('not subscribed'))
  }
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  cl=()=>{
    console.log('toggling',this.state.open)
    this.setState(state=>({
      open:!state.open
    }))
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Home', 'Events', 'Team', 'Contact',this.props.User==null?("login"):("logout")].map((text, index) => (
            <ListItem style={{'paddingLeft':'40px'}} onClick={this.props.login} button key={text}>
              <ListItemText primary={text} />
            </ListItem>

          ))}
          {this.props.User!=null && (<ListItem style={{'paddingLeft':'40px'}} onClick={this.props.subscribe} button key={this.props.notification?'subscirbed':'not subscirbed'}>
            <ListItemText primary={this.props.notification?'subscirbed':'not subscirbed'} />
          </ListItem>)
          }
        </List>

      </div>
    );

    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <img height='50px' src='/static/iconh.png'></img>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            {this.props.children}
            <TemporaryDrawer op={this.state.open} tog={this.cl}/>

          </main>
        </div>
        <SimpleBottomNavigation open={this.cl}  className={classes.bottom}/>

      </>
    );
  }
}



export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
