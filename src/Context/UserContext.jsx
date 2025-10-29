import React, {createContext, useState, useEffect, useContext} from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [isAutenticate, setIsAutenticate] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [user, setUser] = useState({
    name: "Martin",
    email: "",
    password: "",
  });

  const handleOpenToLogin = () => {
    setOpenLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setIsAutenticate(true)
      setOpenLogin(false)
    }
  };

  const handleOpenRegister = () => {
    setOpenLogin(false)
    setOpenRegister(true)
  }

  const value = {
    isAutenticate,
    setIsAutenticate,
    openLogin,
    setOpenLogin,
    user,
    setUser,
    openRegister,
    setOpenRegister,
    handleOpenToLogin,
    handleLogin,
    handleOpenRegister
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}


export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context
}