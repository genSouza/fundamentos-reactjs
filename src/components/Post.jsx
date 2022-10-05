import React, { useState } from "react";
import styles from "./Post.module.scss";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

const Post = ({ author, publishedAt, content, id }) => {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [newCommentText, setNewCommentText] = useState("");
  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const postContent = content.map((line, index) => {
    if (line.type === "paragraph") {
      return <p key={line.content}>{line.content}</p>;
    } else if (line.type === "link") {
      return (
        <p key={line.content}>
          <a href="#">{line.content}</a>
        </p>
      );
    }
  });

  const commentContent = comments.map((comment, index) => {
    return (
      <Comment
        key={comment}
        content={comment}
        onDeleteComment={deleteComment}
      />
    );
  });

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(commentToDelete) {
    const newCommentList = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(newCommentList);
  }

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

      <form
        className={styles["comment-form"]}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles["comment-list"]}>{commentContent}</div>
    </article>
  );
};

export default Post;
