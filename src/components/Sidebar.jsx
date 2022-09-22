import React from "react";
import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="background do usuario"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/genSouza.png"
          alt="user"
        />
        <strong>Genilton Souza</strong>
        <span>Engenheiro de software</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
