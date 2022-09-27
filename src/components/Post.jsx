import React from "react";
import styles from "./Post.module.scss";

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/genSouza.png"
            alt="user"
          />
          <div className={styles["author-info"]}>
            <strong>Genilton Souza</strong>
            <span>Engenheiro de software</span>
          </div>
        </div>
        <time title="23 de Setembro às 14:02" dateTime="2022-09-23 14:02:04">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia tempora
          quibusdam ab quasi. Unde id quos recusandae nulla libero? Est
          repellendus ipsum deserunt molestias laboriosam eaque dolorem ullam ut
          sint?
        </p>
        <p>
          <a href="#">link</a>
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia tempora
          quibusdam ab quasi. Unde id quos recusandae nulla libero? Est
          repellendus ipsum deserunt molestias laboriosam eaque dolorem ullam ut
          sint?
        </p>
      </div>
    </article>
  );
};

export default Post;
