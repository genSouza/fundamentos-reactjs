import React from "react";
import styles from "./Post.module.scss";
import { format, formatDistance, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

const Post = ({ author, publishedAt, content, id }) => {
  // const dateFormatted = new Intl.DateTimeFormat("pt-br", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(publishedAt);
  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const postContent = content.map((line) => {
    if (line.type === "paragraph") {
      return <p>{line.content}</p>;
    } else if (line.type === "link") {
      return (
        <p>
          <a href="#">{line.content}</a>
        </p>
      );
    }
  });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} alt="user" />
          <div className={styles["author-info"]}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>{postContent}</div>

      <form className={styles["comment-form"]} action="">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles["comment-list"]}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export default Post;
