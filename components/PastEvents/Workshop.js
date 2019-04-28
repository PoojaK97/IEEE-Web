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
          <Typography component="p">
            One of the most prominent and dynamic society of Ramaiah Institute of Technology, IEEE RIT-B was inaugurated in the year 2003. Since then, it has made constant endeavors to enrich the students with the various happenings in the field of technology and research. It has ensured that the students’ competency meets all the required industry standards. Handled by a team of highly skilled members, collectively called the Exe-Coms, the club aspires to encourage students from various branches to actively participate and interact with people of different skill-set in their respective fields and therefore learn in the process.

          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Workshop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshop);
