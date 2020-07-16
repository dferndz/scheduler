import React, { useEffect } from "react";

// Firebase config
import { firebaseConfig } from "../firebase.config";
import * as firebase from "firebase/app";
require("firebase/analytics");

const App = () => {
  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }, []);

  return <p>Hello world!</p>;
};

export default App;
