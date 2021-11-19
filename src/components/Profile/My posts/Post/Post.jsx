import React from 'react';
import classes from './Post.module.css';


const Post = () => {
  return (
        <div className={classes.item}>
          <img src='https://html5css.ru/howto/img_avatar.png' alt='prop'/>
          post1
          <div>
            <span>like</span>
          </div>
        </div>
  )
}

export default Post;