import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
export const styles = theme=>({
  root: {
    width: '100vw',
    display:'none',
    [theme.breakpoints.down('xs')]:{
      display:'flex',
      position:'fixed',
      bottom:0,
      zIndex:1000,
    }
  },
});

class SimpleBottomNavigation extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="RITB" target="_blank" href='http://msrit.edu' icon={<LocationOnIcon />} />
        <BottomNavigationAction onClick={this.props.open} label="Menu" icon={<MenuIcon />} />
        <BottomNavigationAction label="IEEE" target="_blank" href='https://www.ieee.org/' icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
