import { useState, useEffect } from "react";

const useAuth = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const user = localStorage.getItem("user");
    return !!user;
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return isLoggedIn;
};

export default useAuth;
