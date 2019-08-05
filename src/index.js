import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDi1sbXNC9tI_5KJZbIGyRQotOEKxlbzF8",
  authDomain: "firestore-react-demo.firebaseapp.com",
  databaseURL: "https://firestore-react-demo.firebaseio.com",
  projectId: "firestore-react-demo",
  storageBucket: "firestore-react-demo.appspot.com",
  messagingSenderId: "374491622548",
  appId: "1:374491622548:web:e54f76cb1378f53e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
