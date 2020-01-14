import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div key={props.id} className={s.item} >
            <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="avatar" />
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div >
    )
}

export default Post