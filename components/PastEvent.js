import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AboutCard from './AboutCard';
import WIE from './PastEvents/WIE';
import PCB from './PastEvents/PCB';
import AGM from './PastEvents/AGM';
import Aavishkaar from './PastEvents/Aavishkaar';
import Workshop from './PastEvents/Workshop';

export const styles = theme => ({
  card: {
    margin:'auto',
    maxWidth: 700,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PastEvent extends React.Component {
  state = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  };

  handleClick1 = () => {
    this.setState(state => ({ open1: !state.open1 }));
  };
  handleClick2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };
  handleClick3 = () => {
    this.setState(state => ({ open3: !state.open3 }));
  };
  handleClick4 = () => {
    this.setState(state => ({ open4: !state.open4 }));
  };
  handleClick5 = () => {
    this.setState(state => ({ open5: !state.open5 }));
  };


  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader

          title="PAST EVENTS"
          //subheader="sub"
        />
        <CardMedia
          className={classes.media}
          title="Paella dish"
        />
        <CardContent>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Click to know more about our past events</ListSubheader>}
            className={classes.root}
          >
            <ListItem button onClick={this.handleClick1}>
              <ListItemText  primary="ARDUINO WORKSHOP 2019" />
              {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} >
                  <Workshop/>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick2}>
              <ListItemText  primary="WIE 2019" secondary="" />
              {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} >
                  <WIE/>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick3}>
              <ListItemText  primary="PCB WORKSHOP 2019" />
              {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} >
                  <PCB/>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick4}>
              <ListItemText  primary="AGM MEET 2019" />
              {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} >
                  <AGM/>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick5}>
              <ListItemText  primary="AAVISHKAAR 2018" />
              {this.state.open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} >
                  <Aavishkaar/>
                </ListItem>
                  </List>
                </Collapse>
                </List>

        </CardContent>
      </Card>
    );
  }
}

PastEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PastEvent);
