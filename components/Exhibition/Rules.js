import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Rules extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
      >
          <List component="div" disablePadding>
            <ListItem className={classes.nested} >
              <ListItemText inset secondary="Teams must be formed by 25th April 2019."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="The teams must use only Arduino Uno 3-5 members in a team."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="The team must meet the deadlines and no extension shall be provided under any circumstances."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="The team must submit their idea in the form of a basic draft approved by their mentor."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="The Arduino(s) and cable(s) ONLY shall be provided by IEEE-RITB (if required) and MUST be  returned after the exhibition."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="The final documentation of the project also must be submitted on the day of exhibition."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="The teams are free to use their own components."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset secondary="Certificates will be provided for competition as long as the project is exhibited at the event."/>
            </ListItem>
        </List>
        </List>
    );
  }
}

Rules.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rules);