import React from 'react'
import s from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem'


const Friends = (props) => {

    let getFriendsItems = props.state.friendDatas.map(i => <FriendItem name={i.name} src={i.src} alt={i.alt} />)
    return (
        <div className={s.friendList}>
            {getFriendsItems}
        </div>
    )
}

export default Friends;