import React from "react";
import styles from "./BtnClose.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useUserContext } from "../../Context/UserContext";

const BtnClose = () => {
  const { setOpenLogin, openLogin, openRegister, setOpenRegister } = useUserContext()

  const handleClose = () => {
    if (openLogin) {
      setOpenLogin(false);
    }

    if (openRegister) {
      setOpenRegister(false)
    }
  };

  return (
    <IoMdCloseCircleOutline onClick={handleClose} className={styles.btnClose} />
  );
};

export default BtnClose;
