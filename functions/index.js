var admin = require('firebase-admin');
const functions=require('firebase-functions')
// var serviceAccount = require("../servicekey.json");
//
// var app=admin.initializeApp({
//   credential: admin.credential.cert({
//     "type": "service_account",
//     "project_id": "ritb-ieee",
//     "private_key_id": "5fd5847331d1e2485e3ffad29da01b63f1a3c7d9",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCn+7S/PKItdPkz\nfIcjxhGshUA9PMShL8D6Gcl1Zd3ymNtZnNCx3zrZkF1lqlsVyoEVvc8uxSdnknUq\nsXNHDrMKcBAMJNDc8GbdrOkm7RF//IIm5wzfVsVwyTm5eb4uRuud1XkHa3Yp50Oy\nkYHj3eD1fLNTSyET+3UW0IwEh6kgAK9jtSEJTx+krVhWK0XKjQ0PU6HgkCjxNYim\nsPo8sR/qNENsxp8hiPQMJm5iqgslSXNPSo8WYcch/v3Td+WWBDrrOrtTKLWi/5Dq\nH3DdXmxGAmm8hJkVAEsrRuUReunMcMSWLP90roBTq/I6bxMY/MocP51s2/RcpbgB\nsbFHNjLPAgMBAAECggEACxaEWnBJbL3YASBvjyOnqiO1hMwexMoVuGNPEjMiIuH0\nXAZU0eH7g722JaURuKXJYzBs5mFF9d3Ch4nk/sQnMYrA79eyRIDZNMvIB2wq0NSY\nvY18tQeIgaafxqenQZHe1Yym+TH59pivtfkAggIZajrL8bUcPtayr7eL/5kefk5R\n3gXqXz6pGIh5DsACxhhbCqaD9IPuPDcAjic+DQ4ErJLw7/5JnPiU9jYyS0gby8F2\noscbf8yQl1vDwzVeK/uSYY4C1kO/KeQu7EoLD7U1kOvHXd3Vvuq0FvbR1uwI45SD\n+3HLA5pkqW5TsUljKNTZ399/uOkwGgpKpHHVU7FkcQKBgQDY3tW7NFXSbORmNfHI\n9P2Qc05e2kkJ1bJXjup2pMJEdq1hssd8Vlgj301SEuUt5L7nAyqymQUHjNWkUgfg\nGgt+CYTcAKnecF7ZTPt7Bvx57wX9riUIPf/vN5/oAJ9NAC28NFk3oyLwb3icCbCi\nM6WhZZPH1KPh4k6GTdzW5D3ppwKBgQDGSsniSvdnl4LrQaGcmT/ZXApZZHJlaXiU\nGT//GXR1Da1cMFDk1brbQP5QDnZWaqCkErPCNhcN/a82wJDAEmcpSB4fY2uBiVJK\naLW5DMkypIyf1VrljFVKBfX8vAlRfocDWIhVfrrHmy7H8mghrzmPwrRp9SCAU3ZK\nVigfflPCmQKBgQClgmrbVDWrQi+NUd4U3+QkOdu1yCG1v8E70XZe1Z7tYSUxSp+z\n5LGfruvzlzgQrmKDK4eKhf2wpWrm3TPlc/sRVXJv9JGvkVLRxE6otcw5wpFv6VeZ\n0rdgebMv/EmXGmvNFqaAL6CanngNndeP8pqVclA2UbJA0dXb6dCAr/AQQQKBgH6e\nEvuk0wYbAUYnyoKseNDarOEX+tQ23P/0f6DtKCf2a9SKJZ15vK90eO+1zGqx+5HJ\nP2+sClysuM1FeSisl6MMoe95FJTKkvlgk2lueKsV15XYLwqU6YEy/Tg8+dZH7P59\n8dBl8+6xcNXMPCIGOcNKmNlv5SkMImSlT0mM6P9BAoGAaO5lh1GbxIi9KFe6s7Kv\nby0ajuj1C+m1bRuLrM72xEx0njGfXPfsFuv0wg+mYZHHFVHhHN10RfE6X7UZ9KXb\nsM28lJnNjaU0a6TWE/im9gGNRCf9e8+Uykc3jJVhKEvErQDhiyQmFqI7lZf9h2I+\niA2f7IDfDsGEtUGkudiEDeM=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-5l5fi@ritb-ieee.iam.gserviceaccount.com",
//     "client_id": "114640529091933124696",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5l5fi%40ritb-ieee.iam.gserviceaccount.com"
//   }),
//   databaseURL: "https://ritb-ieee.firebaseio.com"
// });
// var db=admin.database()
// console.log('hello')

exports.not=functions.database.ref('/users/{uid}').onCreate((snap,context)=>{
  const app=admin.initializeApp({
    credential: admin.credential.cert({
      "type": "service_account",
      "project_id": "ritb-ieee",
      "private_key_id": "5fd5847331d1e2485e3ffad29da01b63f1a3c7d9",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCn+7S/PKItdPkz\nfIcjxhGshUA9PMShL8D6Gcl1Zd3ymNtZnNCx3zrZkF1lqlsVyoEVvc8uxSdnknUq\nsXNHDrMKcBAMJNDc8GbdrOkm7RF//IIm5wzfVsVwyTm5eb4uRuud1XkHa3Yp50Oy\nkYHj3eD1fLNTSyET+3UW0IwEh6kgAK9jtSEJTx+krVhWK0XKjQ0PU6HgkCjxNYim\nsPo8sR/qNENsxp8hiPQMJm5iqgslSXNPSo8WYcch/v3Td+WWBDrrOrtTKLWi/5Dq\nH3DdXmxGAmm8hJkVAEsrRuUReunMcMSWLP90roBTq/I6bxMY/MocP51s2/RcpbgB\nsbFHNjLPAgMBAAECggEACxaEWnBJbL3YASBvjyOnqiO1hMwexMoVuGNPEjMiIuH0\nXAZU0eH7g722JaURuKXJYzBs5mFF9d3Ch4nk/sQnMYrA79eyRIDZNMvIB2wq0NSY\nvY18tQeIgaafxqenQZHe1Yym+TH59pivtfkAggIZajrL8bUcPtayr7eL/5kefk5R\n3gXqXz6pGIh5DsACxhhbCqaD9IPuPDcAjic+DQ4ErJLw7/5JnPiU9jYyS0gby8F2\noscbf8yQl1vDwzVeK/uSYY4C1kO/KeQu7EoLD7U1kOvHXd3Vvuq0FvbR1uwI45SD\n+3HLA5pkqW5TsUljKNTZ399/uOkwGgpKpHHVU7FkcQKBgQDY3tW7NFXSbORmNfHI\n9P2Qc05e2kkJ1bJXjup2pMJEdq1hssd8Vlgj301SEuUt5L7nAyqymQUHjNWkUgfg\nGgt+CYTcAKnecF7ZTPt7Bvx57wX9riUIPf/vN5/oAJ9NAC28NFk3oyLwb3icCbCi\nM6WhZZPH1KPh4k6GTdzW5D3ppwKBgQDGSsniSvdnl4LrQaGcmT/ZXApZZHJlaXiU\nGT//GXR1Da1cMFDk1brbQP5QDnZWaqCkErPCNhcN/a82wJDAEmcpSB4fY2uBiVJK\naLW5DMkypIyf1VrljFVKBfX8vAlRfocDWIhVfrrHmy7H8mghrzmPwrRp9SCAU3ZK\nVigfflPCmQKBgQClgmrbVDWrQi+NUd4U3+QkOdu1yCG1v8E70XZe1Z7tYSUxSp+z\n5LGfruvzlzgQrmKDK4eKhf2wpWrm3TPlc/sRVXJv9JGvkVLRxE6otcw5wpFv6VeZ\n0rdgebMv/EmXGmvNFqaAL6CanngNndeP8pqVclA2UbJA0dXb6dCAr/AQQQKBgH6e\nEvuk0wYbAUYnyoKseNDarOEX+tQ23P/0f6DtKCf2a9SKJZ15vK90eO+1zGqx+5HJ\nP2+sClysuM1FeSisl6MMoe95FJTKkvlgk2lueKsV15XYLwqU6YEy/Tg8+dZH7P59\n8dBl8+6xcNXMPCIGOcNKmNlv5SkMImSlT0mM6P9BAoGAaO5lh1GbxIi9KFe6s7Kv\nby0ajuj1C+m1bRuLrM72xEx0njGfXPfsFuv0wg+mYZHHFVHhHN10RfE6X7UZ9KXb\nsM28lJnNjaU0a6TWE/im9gGNRCf9e8+Uykc3jJVhKEvErQDhiyQmFqI7lZf9h2I+\niA2f7IDfDsGEtUGkudiEDeM=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-5l5fi@ritb-ieee.iam.gserviceaccount.com",
      "client_id": "114640529091933124696",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5l5fi%40ritb-ieee.iam.gserviceaccount.com"
    }),
    databaseURL: "https://ritb-ieee.firebaseio.com"
  });
  admin.messaging().send({data:{event:'Miniproject Exhibition',date:'18th, May'},token:snap.val().token})
})
// db.ref('users/').once('value'),(snapshot)=>{
//   console.log(snapshot.val());
// })



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
