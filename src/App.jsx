import { useState } from "react";
import Header from "./components/Header";
import "./Global.scss";
import styles from "./App.module.scss";

import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

const posts = [
  {
    author: "foo",
    content:
      "Non in ullamco est nisi minim nisi incididunt. Id ipsum enim officia non ut aliqua eu ullamco eiusmod et amet excepteur ipsum labore. Dolor adipisicing irure aliquip officia exercitation dolor labore id sint et. Sint eiusmod aliqua incididunt sunt. Ex id id non veniam in magna. Ullamco consectetur amet exercitation pariatur dolore cillum laboris eiusmod id nisi enim. Nostrud dolor id sit ea ex nisi duis mollit. Tempor non irure labore non cillum ullamco officia. Eu ut in ad dolor quis sunt excepteur adipisicing ullamco. Duis excepteur proident consectetur aute est irure labore consectetur sit amet consectetur. Consequat minim voluptate laboris sunt veniam adipisicing aliquip ipsum ut sit aute esse.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
