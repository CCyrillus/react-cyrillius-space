import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

  let posts = [
    { message: 'Hello React, it is my first post!)', likes: 11 },
    { message: 'AS WE CAN', likes: 21 },
    { message: 'Light weight BABYYY!!', likes: 33 },
    { message: 'No Country for Old Men!)', likes: 19 },
  ]

  let postArray = posts.map(num => (<Post message={num.message} countLikes={num.likes} />))

  return (
    <div className={s.newPost}>
      <h3>
        New posts
      </h3>

      <div >
        <div >
          <textarea className={s.area}></textarea>
        </div>
        <div>
          <button>Share</button>
        </div>
      </div>
      <div className={s.posts}>
      {postArray}
      </div>
    </div>
  )
}

export default MyPosts;