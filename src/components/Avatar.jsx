import React from "react";
import styles from "./Avatar.module.scss";
export const Avatar = ({hasBorder=true, src, alt=''}) => {
  const cname = [
    styles.avatar,
    hasBorder
      ? styles["avatar--with-border"]
      : styles["avatar--no-border"],
  ].join(" ");
  return <img className={cname} src={src} alt={alt} />;
};
