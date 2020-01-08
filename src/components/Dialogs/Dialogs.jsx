import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to='/dialogs/1'>Коля</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/1'>Петя</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/2'>Маша</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/3'>Катя</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/4'>Жорж</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/5'>Игнат</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to='/dialogs/6'>Деомид</NavLink>
                    </div>

                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>Привет</div>
                    <div className={s.message}>Куку</div>
                </div>
            </div>
        </div >
    )
}

export default Dialogs