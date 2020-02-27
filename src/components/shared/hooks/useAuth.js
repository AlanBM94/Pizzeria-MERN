import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("userData"));
    if (storeData && storeData.token) {
      login(storeData.userId, storeData.token);
    }
  }, [login]);

  return { token, login, logout, userId };
};
