import React from "react";
import { useAuthContext } from "../../auth/context";

const AppPage = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <p>App</p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default AppPage;
