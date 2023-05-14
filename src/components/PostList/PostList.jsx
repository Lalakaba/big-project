import React from "react";
import "./postList.css";
import { Post } from "../Post/Post";

export const PostList = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((item) => {
        return <Post key={item.updated_at} {...item} post={item} />;
      })}
    </div>
  );
};

export default PostList;
