import React from "react";
import styles from "./Header.module.scss";
import igniteLogo from "../assets/Ignite-logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotipo do ignite"></img>
    </header>
  );
};

export default Header;
