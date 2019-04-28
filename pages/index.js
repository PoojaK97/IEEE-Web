import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../components/test';
import Info from '../components/info';
import SwipeableTextMobileStepper from '../components/carousel';
import FullWidthTabs from './info';
import {firebaseCloudMessaging} from '../components/webPush';
import firebase from 'firebase/app';
import 'firebase/auth';

export const styles = theme=>{

}

class Index extends React.Component{
  constructor(porps){
    super(porps);
    this.login=this.login.bind(this)
    this.state={
      loggedIn:false,
      User:null,
      notification:false,
      installed:false
    }
  }
  login=()=>{
    const setstuff =(user,s)=>{
      this.setState({
        loggedIn:s,
        User:user
      });
      localStorage.setItem('User',JSON.stringify(user));
    };
    try{
      firebase.initializeApp({
        apiKey: "AIzaSyDEIW5sy8lwg8ialwvTmEqgfevaiy6ELKk",
        authDomain: "ritb-ieee.firebaseapp.com",
        databaseURL: "https://ritb-ieee.firebaseio.com",
        projectId: "ritb-ieee",
        storageBucket: "ritb-ieee.appspot.com",
        messagingSenderId: "776351305681"
  });
}catch{};
    if(!this.state.loggedIn){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      var user=result.user;
      setstuff(user,true);
    }).catch((error)=>{})
  }
    else{
      setstuff(null,false);
      localStorage.removeItem('User');
    }

  }
  subscribe=()=>{
    if(!this.state.notification){
      firebaseCloudMessaging.init(true,this.state.User.uid)
      this.setState({
        notification:true
      });
    }
    else{
      firebaseCloudMessaging.init(false,this.state.User.uid)
      this.setState({
        notification:false
      });
    }
  }

  componentDidMount(){
    //firebaseCloudMessaging.init();

    var user=JSON.parse(localStorage.getItem('User'))
    if (user!==null){
      this.setState({
        loggedIn:true,
        User:user
      })
    }
    }




  render(){
    return (
      <ResponsiveDrawer notification={this.state.notification} subscribe={this.subscribe} loggedIn={this.loggedIn}
        login={this.login} User={this.state.User}>
        {typeof navigator !='undefined' && <button onClick={()=>{
          navigator.share({
            title: 'Web Fundamentals',
            text: 'Check out Web Fundamentals — it rocks!',
            url: 'https://developers.google.com/web',
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        }}>jkhjk</button>}
        {/* <SwipeableTextMobileStepper /> */}
        <FullWidthTabs />
      </ResponsiveDrawer>
    )
  }

}

export default withStyles(styles, { withTheme: true })(Index);
