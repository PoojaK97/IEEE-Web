import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SwipeableTextMobileStepper from '../components/carousel';
import Cardy from '../components/cards'

export function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

export const styles = theme => ({
  root: {
    margin:'auto',
    backgroundColor: '#f0f0f0',
    maxWidth: 800,

  },
});

class Chapters extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="WIE" />
            <Tab label="RoboRIT" />
            <Tab label="PES" />
            <Tab label="CIS" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >

          <TabContainer dir={theme.direction}>
            <Typography>IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering. The WIE in IEEE initiative focuses on bringing together and highlighting all women in tech activities happening across IEEE.</Typography>
          </TabContainer>
        
          <TabContainer dir={theme.direction}>
            <Typography>The Power & Energy Society (PES) provides the world’s largest forum for sharing the latest in technological developments in the electric power industry. It strives to advance innovation, education and applied research in both robotics and automation. Robotic research emphasises intelligence and adaptability to cope with unstructured environments.</Typography>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Typography>The Power & Energy Society (PES) provides the world’s largest forum for sharing the latest in technological developments in the electric power industry.</Typography>
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <Typography>The IEEE Computational Intelligence Society(CIS) is a professional society of the IEEE focussing on the theory, design, application, and development of biologically and linguistically motivated computational paradigms emphasizing neural networks, connectionist systems, genetic algorithms, evolutionary programming, fuzzy systems, and hybrid intelligent systems in which these paradigms are contained.</Typography>
          </TabContainer>
            
        </SwipeableViews>
      </div>
    );
  }
}

Chapters.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Chapters);
