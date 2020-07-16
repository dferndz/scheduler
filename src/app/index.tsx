import React from "react";

// Firebase config
import { firebaseConfig } from "../firebase.config";
import * as firebase from "firebase/app";
require("firebase/analytics");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => <p>Hello world</p>;

export default App;
