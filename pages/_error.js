/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop:  20,
  },
  img:{
    height:'40vw',
    width:'50vw',
    border:'solid 2px gray',
    borderRadius:100,
  },
});

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div className={classes.root}>
          <img className={classes.img} src='/static/1.jpeg'/>

          <Typography>
            {'Error page'}
          </Typography>
            </div>
          </div>
          );
          }
          }

          Index.propTypes = {
          classes: PropTypes.object.isRequired,
          };

          export default withStyles(styles)(Index);
