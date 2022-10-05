import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.scss";

export const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar
        src={"https://github.com/genSouza.png"}
        alt={"user"}
        hasBorder={false}
      />
      <div className={styles["comment-box"]}>
        <div className={styles["comment-box__content"]}>
          <header>
            <div className={styles["author-time"]}>
              <strong>Genilton Souza</strong>
              <time
                title="23 de Setembro às 14:02"
                dateTime="2022-09-23 14:02:04"
              >
                cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
