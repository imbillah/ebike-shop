import initilizeFirebase from "../firebase/Config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

initilizeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  //register user with email & password
  const registerUser = (email, password, name, image) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Log with email & pass
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user info
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  // sending user data to DB
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post("https://protected-oasis-88562.herokuapp.com/users", user)
      .then();
  };
  // checking user as admin or not
  useEffect(() => {
    axios(
      `https://protected-oasis-88562.herokuapp.com/users/${user.email}`
    ).then((res) => setAdmin(res.data.admin));
  }, [user]);
  //user logout
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    admin,
    auth,
    setUser,
    saveUser,
    loading,
    loginUser,
    registerUser,
    logOut,
  };
};

export default useFirebase;
