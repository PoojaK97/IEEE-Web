import 'firebase/messaging'
import firebase from 'firebase/app'
import 'firebase/database'
const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localStorage.getItem('fcm_token')
  },

  init: async function (type,uid) {
    try{firebase.initializeApp({
      apiKey: "AIzaSyDEIW5sy8lwg8ialwvTmEqgfevaiy6ELKk",
            authDomain: "ritb-ieee.firebaseapp.com",
            databaseURL: "https://ritb-ieee.firebaseio.com",
            projectId: "ritb-ieee",
            storageBucket: "ritb-ieee.appspot.com",
            messagingSenderId: "776351305681"
    })}
    catch(err){}
    // try {
    //   if ((await this.tokenInlocalforage()) !== null) {
    //     return false
    //   }
    try{
      if(type){
        const messaging = firebase.messaging()
        await messaging.requestPermission()
        const token = await messaging.getToken()

        localStorage.setItem('fcm_token', token)
          firebase.database().ref('users/'+uid).set({
              token:token

        });
        messaging.onTokenRefresh(function() {
        messaging.getToken().then(function(refreshedToken) {
          firebase.database().ref('users/' + uid).remove()
          firebase.database().ref('users/'+uid).set({
            token:token
                    });
        }).catch(function(err) {
          showToken('Unable to retrieve refreshed token ', err);
        });
      });
            }
      else{
        console.log('removing subs')
        localStorage.removeItem('fcm_token')
        firebase.database().ref('users/' + uid).remove()
      }

    } catch (error) {
        console.error(error)
      }
  }
}

export { firebaseCloudMessaging }
