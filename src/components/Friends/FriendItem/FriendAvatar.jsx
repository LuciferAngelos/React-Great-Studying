import React from 'react'
import s from './../Friends.module.css'



const FriendAvatar = (props) => {
    let { src, alt } = props;

    return (
        <div>
            <img src={props.src} alt={props.alt} className={s.avatarImage}/>
        </div >
    )
}


export default FriendAvatar