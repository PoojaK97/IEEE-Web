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
import SwipeableTextMobileStepper from './AavishkaarC';
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

class Aavishkaar extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader

          title="AAVISHKAAR 2018"
          
          //subheader="sub"
        />
        <CardContent>
            <SwipeableTextMobileStepper/>
          <Typography component="p">
          The annual flagship event of IEEE, Ramaiah Institute of Technology was held on the 6th and 7th of October 2018. Sponsored by AMD, AAVISHKAAR had a total of 12 intercollegiate events with exciting cash prizes conducted from 9am to 5pm spread across the two days. In addition to this, there were Fun event stalls set up which was a major crowd attraction. 


          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Aavishkaar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Aavishkaar);
