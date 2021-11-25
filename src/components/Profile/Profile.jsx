import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'

const Profile = () => {
  return (
    <div>
      <ProfileHeader/>
      <MyPosts/>
    </div>
  )
}

export default Profile;