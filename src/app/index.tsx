import React from "react";
import { useAuth, AuthContext } from "../auth/context";

// Pages
import LandingPage from "../pages/landing";
import AppPage from "../pages/app";

import "../assets/css/bootstrap.min.css";

const App = () => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {auth.isAuthenticated ? <AppPage /> : <LandingPage />}
    </AuthContext.Provider>
  );
};

export default App;
