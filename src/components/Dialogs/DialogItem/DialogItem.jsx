import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    let { name, id } = props;
    //можно ещё написать вот так
    // let path = '/dialogs/' + props.id и подставлять сразу имя переменной в путь


    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div >
    )
}


export default DialogItem