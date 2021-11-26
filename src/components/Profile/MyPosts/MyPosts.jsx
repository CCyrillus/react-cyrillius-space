import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postArray = (props.postsData).map(num => (<Post message={num.message} countLikes={num.likes} />))

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