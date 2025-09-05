import React from "react";
import styles from "./BtnClose.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

const BtnClose = ({ setOpenLogin, openLogin }) => {
  const handleClose = () => {
    if (openLogin) {
      setOpenLogin(false);
    }
  };

  return (
    <IoMdCloseCircleOutline onClick={handleClose} className={styles.btnClose} />
  );
};

export default BtnClose;
