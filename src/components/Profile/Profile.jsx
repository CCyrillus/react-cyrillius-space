import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'

const Profile = (props) => {



  return (
    <div>
      <ProfileHeader/>
      <MyPosts postsData={props.postsData}/>
    </div>
  )
}

export default Profile;