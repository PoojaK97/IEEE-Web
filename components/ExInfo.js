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
import Categories from './Exhibition/Categories';
import Stages from './Exhibition/Stages';
import Rules from './Exhibition/Rules';
import Procedure from './Exhibition/Procedure';

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
    margin:'0',
    backgroundColor: '#f0f0f0',
    maxWidth: 800,

  },
});

class ExInfo extends React.Component {
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
            <Tab label="Stages" />
            <Tab label="Categories" />
            <Tab label="Rules" />
            <Tab label="Procedure" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >

          <TabContainer dir={theme.direction}>
            <Stages/>
          </TabContainer>
            <Categories/>
          <TabContainer dir={theme.direction}>
            <Rules/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Procedure/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

ExInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ExInfo);
