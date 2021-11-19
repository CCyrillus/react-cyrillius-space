import React from 'react';
import classes from './Profile.module.css';
import photo from '../../images/ProfileHeaderPhoto.jpg'
import MyPosts from './My posts/MyPosts';

const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          alt='prop'
          src={photo} />
      </div>
      <div>
        avatar + description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Content;