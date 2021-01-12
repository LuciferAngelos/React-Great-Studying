import React from 'react'
import s from './../Dialogs.module.css'




const Message = (props) => {
    let { message } = props;
    return (
        <div className={s.message}>{props.message} </div>
    )
}


export default Message