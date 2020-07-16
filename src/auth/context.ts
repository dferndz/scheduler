import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";

import useFirebase from "../hooks/useFirebase";

import * as firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

type AuthContextType = {
  auth: firebase.auth.Auth;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  toggleLogin: () => void;
  db?: any;
};

export const AuthContext = createContext<AuthContextType>({
  auth: firebase.auth(),
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  toggleLogin: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const db = useFirebase();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  const login = useCallback(() => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }, []);
  const logout = useCallback(() => {
    firebase.auth().signOut();
  }, []);
  const auth = firebase.auth();
  const toggleLogin = useCallback(() => {
    if (isAuthenticated) logout();
    else login();
  }, [login, logout, isAuthenticated]);

  return { auth, isAuthenticated, login, logout, toggleLogin, db };
};
