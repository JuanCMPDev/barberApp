import React, { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState({});

  const login = async (data) => {

    const res = await fetch("http://localhost:8800/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });
    return res;
  }

  const logout = async () => {
    await fetch("http://localhost:8800/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setCurrentUser({});
    localStorage.removeItem('currentUser');
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};
