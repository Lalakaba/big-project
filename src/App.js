import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import "./index.css";
import { PostList } from "./components/PostList/PostList";
import { postData } from "./posts.js";

function App() {
  // const [hook, setHook] = useState(0);
  // const [posts, setPosts] = useState(postData);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //                                           ; //фильтрация без учета регистра
  //   const filtered = postData.filter((e) =>
  //     e.name.toLocalLowerCase().includes(search.toLocalLowerCase())
  //   );
  //   setPosts(filtered);тзь
  // }, [search]);

return (
  <div className="Page">
    <Header setSearch={setSearch} />
    <main className="container content ">
      <PostList posts={postData} />
    </main>
  </div>
);
}
export default App;

// const postsValue = {
//   handleLike: handlePostLike,
//   posts: posts,
//   setModalActive,
//   user
// }
