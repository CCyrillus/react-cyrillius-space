import React from 'react';
 import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'

const Profile = (props) => {
  
  return (
    <div className={s.profilePage}>
      <ProfileHeader/>
      <MyPosts postsData={props.state.postsData}/>
    </div>
  )
}

export default Profile;