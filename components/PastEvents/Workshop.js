import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import SwipeableTextMobileStepper from './arduinoC';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIcon } from '@material-ui/core';
import mcarousel from '../mcarousel';

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
    border:'solid grey 0.02px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
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

class Workshop extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader

          title="GALLERY"
          //subheader="sub"
        />
        <CardContent>
            <SwipeableTextMobileStepper/>
          <p href="http://ieeeritb.in/files/2019/03/Arduino-workshop.pdf">

          HANDS ON PDF:
          http://ieeeritb.in/files/2019/03/Arduino-workshop.pdf</p>

          <p >LIST OF PROJECTS FOR BEGINNERS:
          https://drive.google.com/file/d/1wRCpFkILzgplMPV7BZIHWp_O6Cv5fzUj/view?usp=sharing</p>
        </CardContent>
      </Card>
    );
  }
}

Workshop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshop);
