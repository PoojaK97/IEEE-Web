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

class PastList extends React.Component {
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
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemText inset primary="STAGES" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="CATEGORIES" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset primary="RULES" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested} >
              <ListItemText inset primary="Debutant" secondary="This is for students who are new to robotics and have no prior experience in the field but
                are curious to explore the possibilities it offers.
                "/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset primary="Specialiste" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

PastList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PastList);