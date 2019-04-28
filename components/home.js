import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
export const styles = {
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  constructor(props){
    super(props);
    var open=this.props.op
  }
  state = {
    top: false,
    left: false,
    bottom: this.props.op,
    right: false,
  };

  toggleDrawer = (side, open) => () => {;
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {['Home', 'Events', 'Team', 'Contact'].map((text, index) => (
              <ListItem  style={{'paddingLeft':'40px'}}  component='a' href={"#"+text} button key={text}>
                <ListItemText primary={text} />
              </ListItem>

            ))}
            <ListItem style={{'paddingLeft':'40px'}}  onClick={this.props.login} button key={'login'}>
              <ListItemText primary={this.props.User?'logout':'login'} />
            </ListItem>
            {this.props.User!=null && (<ListItem style={{'paddingLeft':'40px'}} onClick={this.props.subscribe} button key={this.props.notification?'subscirbed':'not subscirbed'}>
              <ListItemText primary={this.props.notification?'unsubscribed':'subscribed'} />
            </ListItem>)
            }
            <ListItem button style={{'paddingLeft':'40px'}} key={'return'}>
              <ListItemText primary={'return'} />
            </ListItem>
          </List>

        </div>
      </div>
    );

    return (
      <div>

        <Drawer
          anchor="bottom"
          open={this.props.op}
          onClose={this.props.tog}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.tog}
            onKeyDown={this.props.tog}
          >
            {fullList}
          </div>
        </Drawer>
        </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
