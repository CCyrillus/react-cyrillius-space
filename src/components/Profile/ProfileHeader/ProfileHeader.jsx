import React from 'react';
import s from './ProfileHeader.module.css';
import photo from '../../../images/H2.png'
import photo2 from '../../../images/avatar.jpg'

const ProfileHeader = () => {
  return (
    <div className={s.profileHeader}>
      <div>
        <img
          className={s.imgHeader}
          alt='prop'
          src={photo} />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.imageBlock}>
          <img
            className={s.imgAvatar}
            alt='prop'
            src={photo2} />
        </div>
        <div className={s.txtBlock}>
          <h4>Roy :</h4>
          “Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain.“
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;