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

class Procedure extends React.Component {
    state = {
        open: true,
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
      >
          <List component="div" disablePadding>
            <ListItem className={classes.nested} button onClick={this.handleClick} >
              <ListItemText  primary="Registration Procedure and Fee" secondary="Participant can register as an individual or as a team(min of 3 max of 5).
                Registration fees is for both Mini Project competition and workshop.
"/>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="150 rupees for a NON IEEE member individual registration."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="100 rupees for an IEEE member individual registration."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="600 rupees for a NON IEEE members team registration."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="400 rupees for a team with a minimum of 2 IEEE members team registration."/>
                </ListItem>
            </Collapse>
            <ListItem className={classes.nested} button onClick={this.handleClick1} >
              <ListItemText  primary="Payment Instructions"/>
                {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Participants must transfer the equivalent to this given number ‘7250996657’ via Paytm or PhonePe"/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Mention your full name, USN, branch and also the type of registration in the description of the payment."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Proceed to pay"/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="You will then receive an email with a link to pay"/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Individual/Team representative must note down the Transaction ID"/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Take the screenshot of the payment and token number(that will be sent to your registered mail id) and send it to ieeeritbexecom@gmail.com mentioning your Name, USN, Branch and category again in the body of the mail."/>
                </ListItem>
                <ListItem className={classes.nestnested} >
                    <ListItemText  secondary="Failing to follow any of these instructions will lead to disqualification of individual/team registration"/>
                </ListItem>
            </Collapse>
        </List>
        </List>
    );
  }
}

Procedure.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Procedure);
