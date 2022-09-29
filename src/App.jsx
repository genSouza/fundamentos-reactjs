import { useState } from "react";
import Header from "./components/Header";
import "./Global.scss";
import styles from "./App.module.scss";

import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/genSouza.png",
      name: "Genilton souza",
      role: "Engenheiro de Software",
    },
    content: [
      {
        type: "paragraph",
        content: "Non in ullamco est nisi minim nisi incididunt.",
      },
      {
        type: "paragraph",
        content:
          "Id ipsum enim officia non ut aliqua eu ullamco eiusmod et amet excepteur ipsum labore. Dolor adipisicing irure aliquip officia exercitation dolor labore id sint et. Sint eiusmod aliqua incididunt sunt. Ex id id non veniam in magna. Ullamco consectetur amet exercitation pariatur dolore cillum laboris eiusmod id nisi enim. Nostrud dolor id sit ea ex nisi duis mollit. Tempor non irure labore non cillum ullamco officia. Eu ut in ad dolor quis sunt excepteur adipisicing ullamco. Duis excepteur proident consectetur aute est irure labore consectetur sit amet consectetur.",
      },
      {
        type: "paragraph",
        content:
          "Consequat minim voluptate laboris sunt veniam adipisicing aliquip ipsum ut sit aute esse.",
      },
      {
        type: "link",
        content: "https://github.com/genSouza",
      },
    ],
    publishedAt: new Date("2022-09-27 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/TatianePirico.png",
      name: "Tatiane Pirico",
      role: "Front End Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Non in ullamco est nisi minim nisi incididunt.",
      },
      {
        type: "paragraph",
        content:
          "Id ipsum enim officia non ut aliqua eu ullamco eiusmod et amet excepteur ipsum labore. Dolor adipisicing irure aliquip officia exercitation dolor labore id sint et. Sint eiusmod aliqua incididunt sunt. Ex id id non veniam in magna. Ullamco consectetur amet exercitation pariatur dolore cillum laboris eiusmod id nisi enim. Nostrud dolor id sit ea ex nisi duis mollit. Tempor non irure labore non cillum ullamco officia. Eu ut in ad dolor quis sunt excepteur adipisicing ullamco. Duis excepteur proident consectetur aute est irure labore consectetur sit amet consectetur.",
      },
      {
        type: "paragraph",
        content:
          "Consequat minim voluptate laboris sunt veniam adipisicing aliquip ipsum ut sit aute esse.",
      },
      {
        type: "link",
        content: "https://github.com/TatianePirico",
      },
    ],
    publishedAt: new Date("2022-09-27 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/thiagonegreiros.png",
      name: "Thiago Negreiros ",
      role: "Software Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Non in ullamco est nisi minim nisi incididunt.",
      },
      {
        type: "paragraph",
        content:
          "Id ipsum enim officia non ut aliqua eu ullamco eiusmod et amet excepteur ipsum labore. Dolor adipisicing irure aliquip officia exercitation dolor labore id sint et. Sint eiusmod aliqua incididunt sunt. Ex id id non veniam in magna. Ullamco consectetur amet exercitation pariatur dolore cillum laboris eiusmod id nisi enim. Nostrud dolor id sit ea ex nisi duis mollit. Tempor non irure labore non cillum ullamco officia. Eu ut in ad dolor quis sunt excepteur adipisicing ullamco. Duis excepteur proident consectetur aute est irure labore consectetur sit amet consectetur.",
      },
      {
        type: "paragraph",
        content:
          "Consequat minim voluptate laboris sunt veniam adipisicing aliquip ipsum ut sit aute esse.",
      },
      {
        type: "link",
        content: "https://github.com/thiagonegreiros",
      },
    ],
    publishedAt: new Date("2022-09-29 20:00:00"),
  },
];

function App() {
  const postInfo = posts.map((post) => {
    return (
      <Post
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
      />
    );
  });
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>{postInfo}</main>
      </div>
    </div>
  );
}

export default App;
