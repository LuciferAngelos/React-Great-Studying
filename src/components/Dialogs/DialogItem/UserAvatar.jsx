import React from 'react'
import s from './../Dialogs.module.css'



const UserAvatar = (props) => {
    let { src, alt } = props;

    return (
        <div>
            <img src={props.src} alt={props.alt} className={s.avatarImage}/>
        </div >
    )
}


export default UserAvatar