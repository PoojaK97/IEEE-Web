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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NestedList from './NestedList'
import ExInfo from './ExInfo'

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

class ExhibitionCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader

          title="IEEE MINIPROJECT EXHIBITION"
          //subheader="sub"
        />
        <CardMedia
          className={classes.media}
          image="https://drive.google.com/file/d/1KNKpYm5cGHXa7nVibb6NCMqbM8WkHJEm/view?usp=sharing"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
          Aren’t we all fascinated with robots? Here is an opportunity for all the beginners. Come, learn, implement and innovate! Mini Project Competition is an initiative of the RoboRIT Club of IEEE-RITB. Open to all the first and second-year students from all branches, it provides a platform for emerging innovations in the field of robotics
          </Typography>
        </CardContent>
          <CardContent>
            <Typography paragraph>
              <ExInfo/>
            </Typography>
          </CardContent>
      </Card>
    );
  }
}

ExhibitionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExhibitionCard);
