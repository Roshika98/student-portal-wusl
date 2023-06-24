import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedVal = localStorage.getItem("auth");
    return storedVal ? JSON.parse(storedVal) : { id: null, role: null };
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
    console.log("auth item set");
    console.log(JSON.parse(localStorage.getItem("auth")));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
