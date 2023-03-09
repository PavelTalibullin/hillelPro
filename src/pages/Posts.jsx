import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Posts.module.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    };
    getAllPosts();
  }, []);

  return (
    <div>
      <h1>Posts page</h1>
      {posts.map((post) => (
        <div className={styles.Post} key={post.id}>
          <Link to={`${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
