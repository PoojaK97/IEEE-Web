import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from './test';
import Info from '../components/info';
import SwipeableTextMobileStepper from '../components/carousel';


export const styles = theme=>{

}

class Index extends React.Component{
  constructor(porps){
    super(porps);

  }

  render(){
    return (
      <ResponsiveDrawer >
        <SwipeableTextMobileStepper />
      </ResponsiveDrawer>
    )
  }

}

export default withStyles(styles, { withTheme: true })(Index);
