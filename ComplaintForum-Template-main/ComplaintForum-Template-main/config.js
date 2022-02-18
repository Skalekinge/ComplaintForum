import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDbJUY9K-SBKWKdcFDsLZIETMEXfwc_W1E",
  authDomain: "complaintforum-df8e7.firebaseapp.com",
  projectId: "complaintforum-df8e7",
  storageBucket: "complaintforum-df8e7.appspot.com",
  messagingSenderId: "445984032449",
  appId: "1:445984032449:web:f6e95dcbc1b5235816b640"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

