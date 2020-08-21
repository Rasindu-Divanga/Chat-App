import Firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyBWhAsNTkePOYt69lH6aRZ-SDGPQSBIoG4',
  databaseURL: 'https://mychatapp-66d79.firebaseio.com/',
  projectId: 'mychatapp-66d79',
  appId: '1:1097235460625:android:f848c317f10413f61077b0',
};

export default Firebase.initializeApp(firebaseConfig);