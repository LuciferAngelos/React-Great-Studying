import React from 'react'
import s from './../Friends.module.css'



const FriendItem = (props) => {
    let { src, alt, name } = props;

    return (
        <div>
           <div>
                <img src={props.src} alt={props.alt} className={s.avatarImage}/>
            </div>
            <div>
                {props.name}
            </div>
        </div >
    )
}


export default FriendItem