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
  nestnested: {
    paddingLeft: theme.spacing.unit * 8,
  },
});

class Stages extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">The event will be scheduled in two main stages:
        </ListSubheader>}
      >
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText inset primary="Project Review" secondary="In this stage, students will build their projects adhering to some basic rules and regulations under the guidance of their mentor. (Mentor will be assigned to every team who will only guide and supervise the project to make sure of its progress). The projects will be evaluated before exhibiting them."/>
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText inset primary="Project Exhibition" secondary="This is the final stage where your projects will be displayed and shall be reviewed by the judges. All the participants must be ready with a presentable project and a copy of documentation of it for submissions.The winners will be declared and will be awarded certificate and exciting cash prizes. The decision of the judges will be the final. Also, all the participants shall receive the participation certificate."/>
            </ListItem>
        </List>
        </List>
    );
  }
}

Stages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stages);