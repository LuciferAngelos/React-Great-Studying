import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png" alt="" />
            <div className={s.loginBlock}>
                {
                    props.isAuth ?
                        <div>
                            {props.login} - <button onClick={props.logout}>Log Out</button>
                        </div>

                        :
                        <NavLink to={'/login'} className={s.loginLink}>Log In</NavLink>

                }
            </div>
        </header>
    )
}

export default Header