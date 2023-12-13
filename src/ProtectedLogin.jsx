import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context";

function ProtectedLogin() {
  const { auth } = useContext(AuthContext);
  console.log(auth, "eeeeeeeeeeeeeeeeeeeeeeeee");
  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
  //   return (
  //     <div>ProtectedLogin</div>
  //   )
}

export default ProtectedLogin;
