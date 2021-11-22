import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
  return (
    <div>
      New posts
      <div >
        <textarea></textarea>
        <button>Add</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hello React, it is my first post!)' countLikes='11'/>
        <Post message='Good luck man!' countLikes='21'/>
        <Post message='Be Anxious for Nothing!' countLikes='12'/>
      </div>
    </div>
  )
}

export default MyPosts;