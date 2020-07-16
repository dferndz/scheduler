import { useState, useEffect, useCallback } from "react";
import { firebaseConfig } from "../firebase.config";
import * as firebase from "firebase/app";
require("firebase/database");
require("firebase/auth");

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const useFirebase = () => {
  const [data, setData] = useState<any>(null);
  const [fetching, setFetching] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const uid = auth.currentUser?.uid;

  const fetch = useCallback(async () => {
    setFetching(true);

    if (auth.currentUser && auth.currentUser.uid) {
      const rootRef = firebase.database().ref().child(auth.currentUser.uid);

      rootRef.on("value", (snap) => {
        setData(snap.val());
        setFetching(false);
      });
    } else {
      setFetching(false);
    }
  }, []);

  const update = useCallback(async (value: any) => {
    setPending(true);

    if (auth.currentUser && auth.currentUser.uid) {
      const rootRef = firebase.database().ref().child(auth.currentUser.uid);

      rootRef
        .set(value)
        .catch((e) => setError(e))
        .finally(() => setPending(false));
    } else {
      setPending(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [uid, fetch]);

  return { data, fetching, pending, error, update };
};

export default useFirebase;
