import React from 'react';
// import classes from './Profile.module.css';
import photo from '../../images/ProfileHeaderPhoto.jpg'
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
  return (
    <div>
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

export default Profile;