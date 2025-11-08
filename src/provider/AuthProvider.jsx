import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = { name: "Suvro" };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
