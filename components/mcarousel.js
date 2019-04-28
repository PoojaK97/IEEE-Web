import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

export const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const tutorialSteps = [
  {
    label: 'IEEE MiniProject Exhibition',
    text: 'TEXT HERE',
    imgPath:
      'https://drive.google.com/uc?export=download&id=1F8c6NcZdVhflkh4HKEgN58SShjeNwTUw',
  },
  {
    label: 'IEEE Arduino Workshop',
    text: '',
    imgPath:
      'https://drive.google.com/uc?export=download&id=1qbjq2eVE49NG-kBmGQudm7yZWxkuCeo0',
  },
  {
    label: 'Become an IEEE Member NOW!',
    text: '',
    imgPath:
      'https://drive.google.com/uc?export=download&id=0Bz8ly3zE2tnOVHdNRm15OGJyMGM',
  },
  {
    label: 'IEEE Spectrum',
    text: '',
    imgPath:
      'data:image/jpeg;base64,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',
  },
  {
    label: 'WIE 2019',
    text: '',
    imgPath:
      'https://drive.google.com/open?id=0Bz8ly3zE2tnObF9KaGw1RFA4R3c',
  },
  {
    label: 'WIE 2018 Magazine Released!! VIEW NOW',
    text: '',
    imgPath:
      'data:image/jpeg;base64,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',
  },
];


export const styles = theme => ({
  root: {
    margin:'auto',
    maxWidth: 700,
    flexGrow: 1,
  },
  header: {
    display: 'block',
    alignItems: 'center',
    height: 120,
    paddingTop: '20px',
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  imb:{
    display:'block',
    maxWidth:'80%',
  },
  img: {
    maxHeight: 400,
    display: 'flex',
    maxWidth: 700,
    overflow: 'hidden',
    width: '80vw',
    [theme.breakpoints.down('md')]:{
      width:'85vw'
    }
  },
});

class MainCarousel extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div className={classes.imb} key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Paper square elevation={2} className={classes.header}>
          <Typography variant='h5' component='h3'>{tutorialSteps[activeStep].label}</Typography>

          <Typography paragraph>{tutorialSteps[activeStep].text}</Typography>
        </Paper>
        {/* <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
            </Button>
          }
        /> */}
      </div>
    );
  }
}

MainCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainCarousel);
