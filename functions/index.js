var admin = require('firebase-admin');

var serviceAccount = require("../servicekey.json");

var app=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ritb-ieee.firebaseio.com"
});
var db=admin.database()
console.log('hello')
for(let i=0;i<10;i++)
  {db.ref('uid/123456'+i).set({
         email: 'sdlkfj',
          name: 'raj',
          phone_no: 1293102,
          place: 'lksfj',
          slot: '18:00-20:00'
  })}
db.ref('/').on('value',(snapshot)=>{
  console.log(snapshot.val());
})



//
// const onSubs=functions.database.ref('/users/{uid}/{token}').onCreate((snapshot,context)=>{
//   const uid=context.params.uid
//   const token=context.params.token
//   console.log(uid,token)
//   topic='one'
//   admin.messaging().subscribeToTopic(token, topic)
//   .then(function(response) {
//     console.log('Successfully subscribed to topic:', response);
//   })
//   .catch(function(error) {
//     console.log('Error subscribing to topic:', error);
//   });
//   settimeout(send(),10000);
// })
// const removeSubs=functions.database.ref('/users/{uid}/{token}').onDelete((snapshot,context)=>{
//   const uid=context.params.uid
//   const token=context.params.token
//   console.log(uid,token)
//   topic='one'
//   admin.messaging().unsubscribeToTopic(token, topic)
//   .then(function(response) {
//     console.log('Successfully subscribed to topic:', response);
//   })
//   .catch(function(error) {
//     console.log('Error subscribing to topic:', error);
//   });
// })
//
// var topic = 'one';
//
// var message = {
//   data: {
//     Event:'Miniproject Exhibition',
//     Date:'18th May'
//   },
//   topic: topic
// };
//
// // Send a message to devices subscribed to the provided topic.
// const send=()=>
// {admin.messaging().send(message)
//   .then((response) => {
//     // Response is a message ID string.
//     console.log('Successfully sent message:', response);
//   })
//   .catch((error) => {
//     console.log('Error sending message:', error);
//   });
//   settimeout(send(),600000);
// }
