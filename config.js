import firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyCa41vGmR0nAmoHEarh6P8CLWXcoaxpd8A",
  authDomain: "c60project-e6f02.firebaseapp.com",
  databaseURL: "https://c60project-e6f02-default-rtdb.firebaseio.com",
  projectId: "c60project-e6f02",
  storageBucket: "c60project-e6f02.appspot.com",
  messagingSenderId: "965480436650",
  appId: "1:965480436650:web:4fe3e7d15854fdd28211d3"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
