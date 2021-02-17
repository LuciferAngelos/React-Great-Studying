import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"




const ProfileInfo = ({ profile, status, updateStatus, ...props }) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                picture
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="" />
                <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus} />
            </div>

        </div>
    )
}

export default ProfileInfo