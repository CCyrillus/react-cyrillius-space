import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://html5css.ru/howto/img_avatar.png' alt='prop' />
      {props.message}
      <div>
        <span>
          {props.countLikes}♥
        </span>
      </div>
    </div>
  )
}

export default Post;