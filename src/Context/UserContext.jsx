import React, { createContext, useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isAutenticate, setIsAutenticate] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [user, setUser] = useState({
    name: "Martin",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const logout = () => {
    setIsAutenticate(false)
    setOpenMenu(false)
    setUser({ name: "Martin", email: "", password: "" })
    navigate("/")
  }

  const handleOpenToLogin = () => {
    setOpenLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email === "admin@admin.com") {
      setUser({ ...user, name: "Admin" })
      setIsAutenticate(true)
      setOpenLogin(false)
    } else {
      setIsAutenticate(true)
      setOpenLogin(false)
    }
  };

  console.log(openMenu);
  

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
    handleOpenRegister,
    logout,
    setOpenMenu,
    openMenu,
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