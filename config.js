import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwBYdgR0Pw_-ax7_Me6ngEr8Lew00CdUs",
  authDomain: "schoolattendanceapp-93db6.firebaseapp.com",
  databaseURL: "https://schoolattendanceapp-93db6-default-rtdb.firebaseio.com",
  projectId: "schoolattendanceapp-93db6",
  storageBucket: "schoolattendanceapp-93db6.appspot.com",
  messagingSenderId: "440788199192",
  appId: "1:440788199192:web:60e4f36ccb09d9296a206d"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
