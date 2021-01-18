import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatus from "./ProfileStatus"




const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            <div>
                picture
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <ProfileStatus status={'Hello my friends'} />
            </div>

        </div>
    )
}

export default ProfileInfo