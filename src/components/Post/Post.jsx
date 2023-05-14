import React, { useContext } from "react";
import './post.scss';
import {ReactComponent as Like} from './img/emptyheart.svg'
import { UserContext } from "../Context/UserContext";
import { PostsContext } from "../Context/PostsContext";

export const Post = ({image,title,likes,pictures, tags, text, }) => {
  const user = useContext(UserContext);
  const {handleLike} = useContext(PostsContext);

  const handleClick = () => {
    handleLike(image, isLiked);
}


  const isLiked = likes.some(e => e === user._id);
  return (
    <div className="post">
      <a href="/#" className="post__link">
        <img className="post__img"
          src={pictures ?? image}
          alt="one"style={{height:400, width:400}} />

        <div className="post__name">{title}</div>
        <p className="post__text">
        { text}
        </p>
        <div className="post__sticky post__sticky_type_bottom-right">
        <button onClick={handleClick} className={`post__favorite ${isLiked ? 'post__favorite_active' : ''}`}>
          <Like />
          </button>
        </div>
      </a>
    </div>
  );
};

export default Post;



// {/* <User
//           src="https://images.unsplash.com/photo-1683541629272-64013170c4ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
//           alt="cats"
//           name="Jane"
//           min /> */}