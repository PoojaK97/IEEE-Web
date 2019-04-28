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

class Categories extends React.Component {
  state = {
    open: false,
    open1: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClick1 = () => {
    this.setState(state => ({ open1: !state.open1 }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={'The competition shall be held in two categories:'}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested} button onClick={this.handleClick} >
              <ListItemText  primary="Debutant" secondary="This is for students who are new to robotics and have no prior experience in the field but
                are curious to explore the possibilities it offers."/>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Participants must be in teams of maximum 5 members and minimum 3 members. They can be from first year or second year."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Team shall choose any one Project from the project list given and can add innovative touch to it."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="The main motto of the competition is for you to study the components used, understanding the working of each part along with basic coding skills."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Each team will be assigned a student mentor."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="The teams will be judged entirely on completion, efficiency, presentation, innovation,practical implementation of the project."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="After the internal evaluation depending on the confidence of the team and mentor the team under the category can slide to the “SPÉCIALISTE” category and will be judged under “SPÉCIALISTE”"/>
                </ListItem>
            </Collapse>
            <ListItem className={classes.nested} button onClick={this.handleClick1} >
              <ListItemText  primary="Specialiste" secondary="Participants with prior knowledge or experience with Electronics, Design, Development, microcontrollers fall under this category."/>
                {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Participation must be in team of maximum 5 members and minimum 3 members. Can be from both first and second years."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Teams can incorporate the ideas of the projects listed under the category 1 as long as they are not the main idea of the project."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Based on their prior encounter with engineering projects and their present curiosity, teams can propose and new idea they want to work on."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="The teams may be assigned a student mentor."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="The teams will be judged entirely on completion, efficiency, presentation, innovation, practical implementation of the project."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Once registration is done under this category they cannot shift to “DÉBUTANT” category."/>
                </ListItem>
            </Collapse>
        </List>
        </List>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);
